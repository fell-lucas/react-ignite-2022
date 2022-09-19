import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useTranslation } from 'react-i18next'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  const { t } = useTranslation('home')

  return (
    <FormContainer>
      <label htmlFor="task">{t('vou-trabalhar-em')}</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder={t('de-um-nome-para-o-seu-projeto')}
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value={t('projeto-1')} />
      </datalist>

      <label htmlFor="minutesAmount">{t('durante')}</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>{t('minutos')}</span>
    </FormContainer>
  )
}
