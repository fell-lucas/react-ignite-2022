import { formatDistanceToNow } from 'date-fns'
import { enUS, ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CyclesContext } from '../../contexts'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  const { t, i18n } = useTranslation('history')

  return (
    <HistoryContainer>
      <h1>{t('meu-historico')}</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>{t('tarefa')}</th>
              <th>{t('duracao')}</th>
              <th>{t('iniciado')}</th>
              <th>{t('status')}</th>
            </tr>
          </thead>
          <tbody>
            {cycles
              .map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {cycle.minutesAmount} {t('minutos-0')}
                  </td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      locale: i18n.language === 'pt-BR' ? ptBR : enUS,
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor={'green'}>{t('concluido')}</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor={'red'}>{t('interrompido')}</Status>
                    )}
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <Status statusColor={'yellow'}>
                        {t('em-andamento')}
                      </Status>
                    )}
                  </td>
                </tr>
              ))
              .sort((a, b) => Number(b.key) - Number(a.key))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
