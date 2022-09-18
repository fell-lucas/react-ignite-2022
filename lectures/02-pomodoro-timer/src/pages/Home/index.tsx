import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { Countdown, NewCycleForm } from './components'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts'

const newCycleSubmitFormSchema = z.object({
  task: z.string(),
  minutesAmount: z.number().min(1).max(60),
})

type NewCycleSubmitType = z.infer<typeof newCycleSubmitFormSchema>

export function Home() {
  const { createNewCycle, activeCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleSubmitType>({
    resolver: zodResolver(newCycleSubmitFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { watch, handleSubmit, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleNewCycleSubmit(data: NewCycleSubmitType) {
    createNewCycle(data)
    reset()
  }

  function handleInterruptCurrentCycle() {
    interruptCurrentCycle()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleNewCycleSubmit)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton
            onClick={handleInterruptCurrentCycle}
            type="button"
          >
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
