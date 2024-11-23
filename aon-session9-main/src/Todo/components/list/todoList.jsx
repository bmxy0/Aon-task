import { useTodoStore } from "../../../store";

const TodoList = () => {
  // const [list, setList] = useState([]);
  const { list, setList } = useTodoStore();

  const handleDelete = (todo) => {
    setList(list?.filter((el) => el !== todo));
  };
  return (
    <ul>
      {list?.map((todo, i) => (
        <li key={i}>
          {todo} <button onClick={() => handleDelete(todo)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
