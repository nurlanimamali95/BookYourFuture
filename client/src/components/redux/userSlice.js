import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../util/axios";

export const changePasswordUser = createAsyncThunk(
  "/user/changePassword",
  async (params) => {
    const { data } = await axios.post("/api/user/change-password", params);
    return data;
  }
);

// export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
//   const { data } = await axios.get("/api/user/");
//   return data;
// });

const initialState = {
  data: null,
  status: "isLoading",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [changePasswordUser.pending]: (state) => {
      state.status = "isLoading";
      state.data = null;
    },
    [changePasswordUser.fulfilled]: (state, action) => {
      state.status = "isSuccess";
      state.data = action.payload;
    },
    [changePasswordUser.rejected]: (state) => {
      state.status = "isError";
      state.data = null;
    },
  },
});

// export const selectorIsAuth = (state) => Boolean(state.auth.data);

export const userReducer = userSlice.reducer;
