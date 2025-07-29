import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import bookReducer from "../features/bookSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    book: bookReducer,
  },
});
