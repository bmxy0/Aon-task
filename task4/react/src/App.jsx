import { useState , useEffect} from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [todo, setTodo] = useState("");
  const addItem = () => {
    if (todo) {
      setList([...list, todo]);
      setTodo("");
    } else {
      alert("please input a value");
    }
  };

  const removeItem = (index) => {
    let newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  useEffect(() => {
    setTotal(list.length); // Update total with the current length of list
  }, [list]);

  return (
    <>
      <header>
        <div class="container">
          <div class="content">
            <div class="logo">
              <img src={logo} />
            </div>
            <div class="menu">
            
              <Link className="active" to="./App.jsx" >Home</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div class="container">
          <div class="info">
            <h1>Simple ToDo App</h1>
            <p>This todo app for test design.</p>
          </div>

          <div class="form">
            <input
              class="todo"
              placeholder="Write Text here . . ."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button class="add" onClick={addItem}>
              + Add New
            </button>
          </div>

          <div class="line"></div>

          <div id="list">
            {list.map((el, index) => (
              <div key={index} class="item">
                <p>{el}</p>
                <button className="delete" onClick={() => removeItem(index)} >
                  X
                </button>
              </div>
            ))}
          </div>
          <p className="total">
            Total List : <span class="num">{total}</span>
          </p>
          <button className="add floating" onClick={addItem}>
            + Add New
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
