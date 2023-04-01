import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div class="group relative block rounded-3xl border-4 border-black bg-white pt-12 transition hover:bg-yellow-50 sm:pt-16 lg:pt-24 m-5 w-auto">
      <span class="absolute inset-0 -z-10 -translate-x-2 -translate-y-2 rounded-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-300 ring-4 ring-black"></span>

      <span class="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 rounded-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-300 ring-4 ring-black"></span>

      <div class="p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-start">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
          className="checkbox checkbox-sm checkbox-secondary"
        />
        <span
          style={{ textDecoration: task.isDone ? "line-through" : "none" }}
          className="mt-1 font-bold text-md"
        >
          {task.description}
        </span>
      </div>
    </div>
  );
};

export default Task;
