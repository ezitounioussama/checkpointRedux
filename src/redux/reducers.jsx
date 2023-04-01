import {
  ADD_TASK,
  TOGGLE_TASK,
  SET_FILTER,
  EDIT_TASK,
  DELETE_TASK,
} from "./constants";

//* Define the initial state of the store
const initialState = {
  tasks: [],
  filter: "all",
};

//* Define the reducer function that will handle state changes
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      //* Create a new state object with the new task added to the tasks array
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK:
      //* Map over the tasks array, and toggle the isDone property of the task with the given ID
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              isDone: !task.isDone,
            };
          } else {
            return task;
          }
        }),
      };
    case SET_FILTER:
      //* Set the filter property of the state to the new filter value
      return {
        ...state,
        filter: action.payload.filter,
      };

    case EDIT_TASK:
      //* Map over the tasks array, and update the description of the task with the given ID
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              description: action.payload.description,
            };
          } else {
            return task;
          }
        }),
      };
    case DELETE_TASK:
      //* Filter out the task with the given ID from the tasks array
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      //* If the action type doesn't match any of the cases above, return the current state
      return state;
  }
};

//* Export the reducer function so it can be used by the store
export default rootReducer;
