import React, { createContext, useReducer, useState } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

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

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function CycleProvider({ children }: React.PropsWithChildren) {
  const [cycleState, dispatch] = useReducer(
    (state: CycleState, action: any) => {
      switch (action.type) {
        case 'ADD_NEW_CYCLE':
          return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id,
          }
        case 'FINISH_CURRENT_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              }
              return cycle
            }),
          }
        case 'INTERRUPT_CURRENT_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, interruptedDate: new Date() }
              }
              return cycle
            }),
            activeCycleId: null,
          }
        default:
          return state
      }
    },
    {
      cycles: [],
      activeCycleId: null,
    },
  )

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
    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })
    setAmountSecondsPassed(0)
  }

  console.log(activeCycle)

  function finishCurrentCycle() {
    dispatch({
      type: 'FINISH_CURRENT_CYCLE',
    })
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
    })
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
