import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE,
  FINISH_CURRENT_CYCLE,
  INTERRUPT_CURRENT_CYCLE,
}

export interface Action {
  type: ActionTypes
  payload?: {
    cycle: Cycle
  }
}

export function addNewCycleAction(newCycle: Cycle): Action {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      cycle: newCycle,
    },
  }
}

export function finishCurrentCycleAction(): Action {
  return {
    type: ActionTypes.FINISH_CURRENT_CYCLE,
  }
}

export function interruptCurrentCycleAction(): Action {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
