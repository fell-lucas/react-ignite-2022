import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Iniciado</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles
              .map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      locale: ptBR,
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor={'green'}>Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor={'red'}>Interrompido</Status>
                    )}
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <Status statusColor={'yellow'}>Em andamento</Status>
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
