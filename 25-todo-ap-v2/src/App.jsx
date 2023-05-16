import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    setTodos([...todos, text]);
  }

  const deleteTodoHendler = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHendler} />
    </div>
  );
}

export default App;
