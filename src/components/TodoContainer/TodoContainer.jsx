import React, { useEffect, useRef } from "react";
import Todos from "../Todos/Todos";
import { ClipboardList } from "lucide-react";
import { useState } from "react";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList([...todoList, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  return (
    <div className="bg-white max-w-[95%] md:max-w-175 mx-auto p-5 rounded-2xl">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <ClipboardList /> <h1>Todo List</h1>
      </div>
      <div className="my-5 flex">
        <input
          ref={inputRef}
          className="input"
          type="text"
          placeholder="Add your task"
        />
        <button onClick={add} className="btn btn-primary">
          Add
        </button>
      </div>
      <Todos
        todoList={todoList}
        setTodoList={setTodoList}
        deleteTodo={deleteTodo}
        toggle={toggle}
      />
    </div>
  );
};

export default TodoContainer;
