import { differenceInSeconds } from 'date-fns'
import { useCallback, useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts'
import { Cycle } from '../../../../reducers/cycle'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    finishCurrentCycle,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const runInInterval = useCallback(
    (activeCycle: Cycle) => {
      const secondsDiffFromStartToNow = differenceInSeconds(
        new Date(),
        activeCycle.startDate,
      )

      if (secondsDiffFromStartToNow >= totalSeconds) {
        finishCurrentCycle()
        setSecondsPassed(totalSeconds)
      } else {
        setSecondsPassed(secondsDiffFromStartToNow)
      }
    },
    [finishCurrentCycle, totalSeconds, setSecondsPassed],
  )

  // Removes 1s delay when switching to Timer tab and the countdown is concluded
  useEffect(() => {
    if (activeCycle) {
      runInInterval(activeCycle)
    }
  })

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => runInInterval(activeCycle), 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, runInInterval])
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = `Ignite Pomodoro Timer`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
