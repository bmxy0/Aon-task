
import { create } from 'zustand'

export const useStore = create((set) => ({
isLogin:false,
setIsLogin:(isLogin)=>set({isLogin})



}))