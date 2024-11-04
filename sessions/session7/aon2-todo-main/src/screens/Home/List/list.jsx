const ToDoList = ({list, onRemove}) => {
  return (
    <div className="todo-list">
      {list.map((el) => (
        <div className="todo-item">
          <p>{el.todo}</p>
          <button onClick={() => onRemove(el.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList
