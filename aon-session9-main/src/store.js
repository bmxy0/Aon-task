import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todoInput: "",
  list: [],

  setList: (list) => set({ list }),
  setTodoInput: (todoInput) => set({ todoInput }),
}));
