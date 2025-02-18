import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covidSlice";

const store = configureStore({
  reducer: {
    // Define your slice reducers here
    covidSlice,
  },
});

export default store;
