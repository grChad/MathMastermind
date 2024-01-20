import { create } from 'zustand'
import { UseComplete, UseMathOperationSettings } from './bearTypes'

// Configuraciones de operaciones matemáticas
export const useMathOperationSettings = create<UseMathOperationSettings>(
  (set) => ({
    operation: '', // default ''
    setOperations: (op) => set({ operation: op }),

    level: '', // default ''
    setLevel: (lv) => set({ level: lv }),

    quantily: 0, // default 0
    setQuantily: (quan) => set({ quantily: quan }),
  }),
)

// Se han seleccionado todas las opciones dentro de '/home'
export const useComplete = create<UseComplete>((set) => ({
  isComplete: false, // default false
  setIsComplete: (bool) => set({ isComplete: bool }),
}))
