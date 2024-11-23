import { create } from 'zustand'

export const useStore = create((set) => ({
  count: 0,
  setCount: () => set((state) => ({ state})),
  
}))
