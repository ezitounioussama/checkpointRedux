import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  // Get the tasks and filter from the store
  const tasks = useSelector((state) => {
    switch (state.filter) {
      // If the filter is set to "done", return only the completed tasks
      case "done":
        return state.tasks.filter((task) => task.isDone);
      // If the filter is set to "not", return only the incomplete tasks
      case "not":
        return state.tasks.filter((task) => !task.isDone);
      // If the filter is set to "all" or any other unknown value, return all tasks
      default:
        return state.tasks;
    }
  });

  // Render the list of tasks
  return (
    <div className="border rounded-none xl:rounded-lg md:rounded-lg  w-full flex flex-wrap px-10 py-5 ">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
