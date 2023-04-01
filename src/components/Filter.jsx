import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="mb-5">
      <label for="underline_select" class="sr-only">
        Filter:
      </label>
      <select
        id="filter-select"
        onChange={handleChange}
        class=" block py-2.5 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-800 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer select select-info px-5"
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not">Not Done</option>
      </select>
    </div>
  );
};

export default Filter;
