import {
  ADD_TASK,
  TOGGLE_TASK,
  SET_FILTER,
  EDIT_TASK,
  DELETE_TASK,
} from "./constants";

//* Action creator for adding a new task
export const addTask = (id, description) => {
  return {
    type: ADD_TASK,
    payload: {
      id,
      description,
      isDone: false,
    },
  };
};

//* Action creator for toggling a task's completion status
export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    },
  };
};

//* Action creator for editing an existing task
export const editTask = (id, description) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      description,
    },
  };
};

//* Action creator for deleting an existing task
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};

//* Action creator for setting the current filter
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: {
      filter,
    },
  };
};
