import { useState } from "react";
import { useTodoStore } from "../../../store";

const TodoForm = () => {
  //   const [todoInput, setTodoInput] = useState("");
  const { todoInput, setTodoInput , setList, list} = useTodoStore();

  const handleAdd = () => {
    setList([todoInput, ...list]);
    setTodoInput("");
  };
  return (
    <div>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Write todo here.."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;
