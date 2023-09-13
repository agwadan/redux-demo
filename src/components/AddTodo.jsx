import React, { useState } from "react";
import { useDispatch } from "react-redux"; //---- useDispatch will make changes to the store
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  //Function to wrap up data and then send it to addTodo handler
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default AddTodo;
