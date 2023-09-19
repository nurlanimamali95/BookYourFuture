import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { userReducer } from "./userSlice";
import { passwordReducer } from "./passwordSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    password: passwordReducer,
  },
});

export default store;
