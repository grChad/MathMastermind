import { create } from 'zustand'
import {
  UseExerciseTrackingState,
  UseMathProblemDataHandler,
} from './bearTypes' // Types

// Operations
import { Sum, Subtraction } from './operations/easy'
import Multiplication from './operations/Multiplication'
import { OperationType } from '../src/utils/gameData'

// Estado de seguimiento de ejercicios
export const useExerciseTrackingState = create<UseExerciseTrackingState>(
  (set) => ({
    countProgress: 0,
    setCountProgress: (bool) =>
      set((state) => ({ countProgress: bool ? state.countProgress + 1 : 0 })),

    isCorrect: undefined, // undefined || boolean
    // ?? => nullish coalescing operator, si 'bool' !== null || undefined => 'bool', sino => 'undefined'.
    setIsCorrect: (bool) => set({ isCorrect: bool ?? undefined }),

    success: 0, // default = 0
    setSuccess: (bool) =>
      set((state) => ({ success: bool ? state.success + 1 : 0 })),
  }),
)

const calculateOptions = (type: string, lv: string) => {
  let funOPeration

  if (type === OperationType.Suma) {
    funOPeration = Sum(lv)
  } else if (type === OperationType.Resta) {
    funOPeration = Subtraction(lv)
  } else if (type === OperationType.Multiplicacion) {
    funOPeration = Multiplication(lv)
  } else {
    funOPeration = Sum(lv)
  }

  return {
    operatorA: funOPeration.operatorA,
    operatorB: funOPeration.operatorB,
    result: funOPeration.result,
    optionsAnswers: funOPeration.optionsAnswers,
  }
}

// Manejador de datos de problemas matemáticos
export const useMathProblemDataHandler = create<UseMathProblemDataHandler>()(
  (set) => ({
    operationData: {
      operatorA: 0,
      operatorB: 0,
      result: 0,
      optionsAnswers: [0, 0, 0, 0, 0],
    },
    setOperationData: (type, lv) =>
      set({ operationData: calculateOptions(type, lv) }),

    selectAnswer: 0,
    setSelectAnswer: (answer) => set({ selectAnswer: answer }),
  }),
)
