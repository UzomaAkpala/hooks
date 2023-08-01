import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Pay Bills", id: 1 },
    { text: "Do your Home Work", id: 2 },
    { text: "Feed the Dog", id: 3 },
  ]);
  const addTodo = (text) => {
    setTodos([...todos, { text, id: Math.random() }]);
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
      <AddNewTodo addTodo={addTodo} />
    </div>
  );
};
export default TodoList;
