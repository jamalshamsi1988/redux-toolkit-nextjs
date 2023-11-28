import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userReducer from "./features/users/usersSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});

export default store;
