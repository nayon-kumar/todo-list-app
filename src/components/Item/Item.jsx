import React from "react";
import { Trash2 } from "lucide-react";
import { Circle } from "lucide-react";
import { CircleCheck } from "lucide-react";

const Item = ({ id, text, isComplete, deleteTodo, toggle }) => {
  return (
    <div
      onClick={() => toggle(id)}
      className="flex items-center gap-3 justify-between border-2 rounded-lg p-5 border-gray-200"
    >
      <div className="flex items-center gap-3">
        <div>{isComplete ? <CircleCheck /> : <Circle />}</div>
        <p className={isComplete ? "line-through" : ""}>{text}</p>
      </div>
      <div
        className="cursor-pointer text-red-500 p-0.5 rounded-full"
        onClick={() => deleteTodo(id)}
      >
        <Trash2 />
      </div>
    </div>
  );
};

export default Item;
