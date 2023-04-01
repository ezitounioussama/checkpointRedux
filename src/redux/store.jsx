import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

//? Create the store using the configureStore function from Redux Toolkit
const store = configureStore({
  reducer, // Pass the reducer to the store configuration
});

//? Export the store so it can be used by the rest of the application
export default store;
