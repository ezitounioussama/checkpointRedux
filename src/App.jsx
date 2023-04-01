import React from "react";
import "./App.css";
import AddTask from "./components/Addtask";
import ListTask from "./components/ListTask";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="flex justify-center items-center flex-col my-5 m-0 lg:mx-24 md:mx-24 sm:mx-0">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        To Do List
      </h1>
      <div>
        <AddTask />
        <Filter />

        <ListTask />
      </div>
    </div>
  );
}

export default App;
