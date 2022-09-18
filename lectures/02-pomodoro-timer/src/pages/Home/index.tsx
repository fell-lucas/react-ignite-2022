import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { createContext, useState } from 'react'
import { Countdown, NewCycleForm } from './components'

const newCycleSubmitFormSchema = z.object({
  task: z.string(),
  minutesAmount: z.number().min(1).max(60),
})

type NewCycleSubmitType = z.infer<typeof newCycleSubmitFormSchema>

interface Cycle extends NewCycleSubmitType {
  id: string
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextData {
  activeCycle: Cycle | undefined
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext<CyclesContextData>(
  {} as CyclesContextData,
)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const newCycleForm = useForm<NewCycleSubmitType>({
    resolver: zodResolver(newCycleSubmitFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { watch, handleSubmit, reset } = newCycleForm

  function handleNewCycleSubmit(data: NewCycleSubmitType) {
    const now = new Date()
    const newCycle: Cycle = {
      id: String(now.getTime()),
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: now,
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        }
        return cycle
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function handleInterruptedCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        }
        return cycle
      }),
    )

    setActiveCycleId(null)
  }

  return (
    <HomeContainer>
      <CyclesContext.Provider
        value={{
          activeCycle,
          markCurrentCycleAsFinished,
          amountSecondsPassed,
          setSecondsPassed,
        }}
      >
        <form onSubmit={handleSubmit(handleNewCycleSubmit)}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />

          {activeCycle ? (
            <StopCountdownButton onClick={handleInterruptedCycle} type="button">
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
      </CyclesContext.Provider>
    </HomeContainer>
  )
}
