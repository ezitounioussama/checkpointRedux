import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
  //? Initialize the component state with an empty string
  const [description, setDescription] = useState("");
  //? Set up the dispatch function from the Redux store
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); //? Prevent the default form submission behavior
    if (description.trim() !== "") {
      //? Check if the description is not an empty string
      const id = new Date().getTime(); //! Generate a unique ID based on the current time
      dispatch(addTask(id, description)); //? Dispatch the addTask action with the new task information
      setDescription(""); //? Reset the component state to an empty string
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center my-10 w-full"
    >
      {/* Handle the form submission with the handleSubmit function */}

      <label
        for="UserEmail"
        className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          placeholder="Enter task description"
          value={description} //* Bind the value of the input field to the component state
          onChange={(e) => setDescription(e.target.value)} //* Update the component state when the input field changes
          className="peer h-8 w-96 mx-5 border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          Task
        </span>
      </label>

      <button
        type="submit"
        className="group relative inline-block focus:outline-none focus:ring rounded-xl mx-5"
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-xl transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative inline-block border-2 border-current px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          Add Task
        </span>
      </button>
    </form>
  );
};

export default AddTask;
