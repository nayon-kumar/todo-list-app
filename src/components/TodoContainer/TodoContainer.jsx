import React from "react";
import Todos from "../Todos/Todos";
import { ClipboardList } from "lucide-react";

const TodoContainer = () => {
  return (
    <div className="bg-white max-w-[95%] md:max-w-175 mx-auto p-5 rounded-2xl">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <ClipboardList /> <h1>Todo List</h1>
      </div>
      <Todos />
    </div>
  );
};

export default TodoContainer;
