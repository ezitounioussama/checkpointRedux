import {
  ADD_TASK,
  TOGGLE_TASK,
  SET_FILTER,
  EDIT_TASK,
  DELETE_TASK,
} from "./constants";

// Retrieve stored state or set the default state
const storedState = localStorage.getItem("state");
const initialState = storedState
  ? JSON.parse(storedState)
  : { tasks: [], filter: "all" };

// Define the reducer function that will handle state changes
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Create a new state object with the new task added to the tasks array
      const addTaskState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      // Store the new state in localStorage
      localStorage.setItem("state", JSON.stringify(addTaskState));
      return addTaskState;

    case TOGGLE_TASK:
      // Map over the tasks array, and toggle the isDone property of the task with the given ID
      const toggleTaskState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
      // Store the new state in localStorage
      localStorage.setItem("state", JSON.stringify(toggleTaskState));
      return toggleTaskState;

    case SET_FILTER:
      // Set the filter property of the state to the new filter value
      const setFilterState = {
        ...state,
        filter: action.payload.filter,
      };
      // Store the new state in localStorage
      localStorage.setItem("state", JSON.stringify(setFilterState));
      return setFilterState;

    case EDIT_TASK:
      // Map over the tasks array, and update the description of the task with the given ID
      const editTaskState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };
      // Store the new state in localStorage
      localStorage.setItem("state", JSON.stringify(editTaskState));
      return editTaskState;

    case DELETE_TASK:
      // Filter out the task with the given ID from the tasks array
      const deleteTaskState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
      // Store the new state in localStorage
      localStorage.setItem("state", JSON.stringify(deleteTaskState));
      return deleteTaskState;

    default:
      // If the action type doesn't match any of the cases above, return the current state
      return state;
  }
};

export default rootReducer;
