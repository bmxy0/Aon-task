import { useState } from "react";
import TodoForm from "./components/form/todoForm";
import TodoList from "./components/list/todoList";

const Todo = () => {
    
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
