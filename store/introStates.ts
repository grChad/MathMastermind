import { create } from 'zustand' // Store
import { UseCommunication, UseUserData, UseShowViewFloat } from './bearTypes'

export const useCommunication = create<UseCommunication>((set) => ({
  countMessage: 0,
  // si 'bool' es true => countMessage++, de lo contrario: countMessage = newValue
  setCountMessage: (bool, newValue) =>
    set((state) => ({
      countMessage: bool ? state.countMessage + 1 : newValue,
    })),
  isTalking: true,
  setIsTalking: (isTrue) => set({ isTalking: isTrue }),
}))

export const useUserData = create<UseUserData>((set) => ({
  userName: '', // default ''
  userGenre: '', // male, female
  setUserName: (newName) => set({ userName: newName }),
  setUserGenre: (newGenre) => set({ userGenre: newGenre }),
}))

export const useShowViewFloat = create<UseShowViewFloat>((set) => ({
  hasViewGenre: false,
  setHasViewGenre: (bool) => set({ hasViewGenre: bool }),

  hasViewUserName: false,
  setHasViewUserName: (bool) => set({ hasViewUserName: bool }),
}))
