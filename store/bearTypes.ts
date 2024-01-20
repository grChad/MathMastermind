// NOTE: ------------------[introStates]------------------
export interface UseUserData {
  userName: string
  setUserName: (newName: string) => void

  userGenre: string
  setUserGenre: (newGenre: string) => void
}

export interface UseCommunication {
  countMessage: number
  setCountMessage: (bool: boolean, newValue?: number) => void

  isTalking: boolean
  setIsTalking: (isTrue: boolean) => void
}

export interface UseShowViewFloat {
  hasViewGenre: boolean
  setHasViewGenre: (bool: boolean) => void

  hasViewUserName: boolean
  setHasViewUserName: (bool: boolean) => void
}

// NOTE: ------------------[homeStates]------------------
export interface UseMathOperationSettings {
  operation: string
  setOperations: (op: string) => void

  level: string
  setLevel: (lv: string) => void

  quantily: number
  setQuantily: (quantily: number) => void
}

export interface UseComplete {
  isComplete: boolean
  setIsComplete: (bool: boolean) => void
}

// NOTE: ------------------[gameStates]------------------
export interface UseExerciseTrackingState {
  countProgress: number
  setCountProgress: (bool: boolean) => void

  isCorrect?: boolean
  setIsCorrect: (bool?: boolean) => void

  success: number
  setSuccess: (bool: boolean) => void
}

export interface UseMathProblemDataHandler {
  operationData: {
    operatorA: number
    operatorB: number
    result: number
    optionsAnswers?: number[]
  }
  setOperationData: (type: string, lv: string) => void

  selectAnswer: number
  setSelectAnswer: (answer: number) => void
}
