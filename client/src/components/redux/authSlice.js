import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../util/axios";

export const fetchUserData = createAsyncThunk(
  "auth/fetchAuth",
  async (params) => {
    const { data } = await axios.post("/api/auth/login", params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "isLoading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.status = "isLoading";
      state.data = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = "isSuccess";
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state) => {
      state.status = "isError";
      state.data = null;
    },
  },
});

export const authReducer = authSlice.reducer;
