import React, { createContext, useReducer, useState } from 'react'
import {
  addNewCycleAction,
  Cycle,
  cycleReducer,
  finishCurrentCycleAction,
  interruptCurrentCycleAction,
} from '../reducers/cycle'

export type CreateNewCycleData = Pick<Cycle, 'task' | 'minutesAmount'>

interface CyclesContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  finishCurrentCycle: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateNewCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext<CyclesContextData>(
  {} as CyclesContextData,
)

export function CycleProvider({ children }: React.PropsWithChildren) {
  const [cycleState, dispatch] = useReducer(cycleReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycleState.cycles.find(
    (cycle) => cycle.id === cycleState.activeCycleId,
  )

  function createNewCycle(data: CreateNewCycleData) {
    const now = new Date()
    const newCycle: Cycle = {
      id: String(now.getTime()),
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: now,
    }
    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function finishCurrentCycle() {
    dispatch(finishCurrentCycleAction())
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles: cycleState.cycles,
        activeCycle,
        amountSecondsPassed,
        finishCurrentCycle,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
