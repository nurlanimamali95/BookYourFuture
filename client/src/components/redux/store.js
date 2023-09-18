import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { userReducer } from "./userSlice";
import { eventsReducer } from "./eventsSlice";
import { studentsReducer } from "./studentsSlice";
import { groupsReducer } from "./groupsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    events: eventsReducer,
    students: studentsReducer,
    groups: groupsReducer,
  },
});

export default store;
