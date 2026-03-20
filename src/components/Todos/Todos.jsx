import React from "react";
import Item from "../Item/Item";

const Todos = ({ todoList, deleteTodo }) => {
  return (
    <div className="flex flex-col gap-2">
      {todoList.map((item) => (
        <Item
          id={item.id}
          text={item.text}
          isComplete={item.isComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
