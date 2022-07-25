import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export default store;
