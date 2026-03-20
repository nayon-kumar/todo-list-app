import React from "react";
import Item from "../Item/Item";

const Todos = ({ todoList, deleteTodo, toggle }) => {
  return (
    <div className="flex flex-col gap-2">
      {todoList.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          isComplete={item.isComplete}
          deleteTodo={deleteTodo}
          toggle={toggle}
        />
      ))}
    </div>
  );
};

export default Todos;
