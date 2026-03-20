import React from "react";
import { Trash2 } from "lucide-react";
import { CircleCheck } from "lucide-react";

const Todos = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* List */}
      <div className="flex items-center gap-3 justify-between border-2 rounded-lg p-5 border-gray-200">
        <div className="flex items-center gap-3">
          <div>
            <CircleCheck />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cursor-pointer text-red-500 p-0.5 rounded-full">
          <Trash2 />
        </div>
      </div>
      {/* List */}
      <div className="flex items-center gap-3 justify-between border-2 rounded-lg p-5 border-gray-200">
        <div className="flex items-center gap-3">
          <div>
            <CircleCheck />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cursor-pointer text-red-500 p-0.5 rounded-full">
          <Trash2 />
        </div>
      </div>
      {/* List */}
      <div className="flex items-center gap-3 justify-between border-2 rounded-lg p-5 border-gray-200">
        <div className="flex items-center gap-3">
          <div>
            <CircleCheck />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cursor-pointer text-red-500 p-0.5 rounded-full">
          <Trash2 />
        </div>
      </div>
    </div>
  );
};

export default Todos;
