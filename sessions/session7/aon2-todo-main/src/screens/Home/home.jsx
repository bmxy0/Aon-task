import { useState, useEffect } from "react";
import Container from "../../components/Container/container";
import Divider from "../../components/Divider/divider";
import "./home.css";
import ToDoList from "./List/list";

const HomeScreen = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [total, setTotal] = useState(0);
  const handleAddNew = () => {
    let newList = [...list, { id: list.length + 1, todo: inputValue }];
    setList(newList);
    setInputValue("");
  };
  useEffect(() => {
    setTotal(list.length);
  }, [list]);

  const handleRemove = (id) => {
    let newList = list.filter((el) => el?.id !== id);
    setList(newList);
  };

  return (
    <div className="home-screen">
      <Container>
        <h1>Simple ToDo App</h1>
        <p className="sub-title">This todo app for test design.</p>

        <div className="input-form">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write Text here . . ."
          />
          <button onClick={handleAddNew}>+ Add New</button>
        </div>

        <Divider />
        <ToDoList list={list} onRemove={(id) => handleRemove(id)} />
        <p className="total">
          Total List : <span className="num">{total}</span>
        </p>
      </Container>
    </div>
  );
};

export default HomeScreen;