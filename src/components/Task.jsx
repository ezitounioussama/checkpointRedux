import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [description, setDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleUpdate = () => {
    dispatch(editTask(task.id, description));
    setEditable(false);
  };

  const handleCancel = () => {
    setDescription(task.description);
    setEditable(false);
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="group relative block rounded-3xl border-4 border-black bg-white pt-12 transition hover:bg-yellow-50 sm:pt-16 lg:pt-24 m-5 w-auto">
      <span className="absolute inset-0 -z-10 -translate-x-2 -translate-y-2 rounded-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-300 ring-4 ring-black"></span>
      <span className="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 rounded-3xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-300 ring-4 ring-black"></span>
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-start">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
          className="checkbox checkbox-sm checkbox-secondary mb-2"
        />
        {editable ? (
          <div>
            <input
              type="text"
              value={description}
              onChange={handleChange}
              className="mt-1 font-bold text-md  border rounded-lg p-2"
            />
            <button
              onClick={handleUpdate}
              className="mx-2 btn btn-outline btn-secondary"
            >
              Save
            </button>
            <button onClick={handleCancel} className="mx-2 btn btn-error">
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex flex-col-reverse justify-start items-start flex-wrap">
            <span
              style={{
                textDecoration: task.isDone ? "line-through" : "none",
              }}
              className="font-bold text-md ml-5"
            >
              {description}
            </span>
            <div className="flex items-center">
              <svg
                onClick={() => setEditable(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 my-2 mr-2 cursor-pointer text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <svg
                onClick={handleDelete}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 cursor-pointer text-red-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
