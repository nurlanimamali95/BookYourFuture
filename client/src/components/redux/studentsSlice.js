import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../util/axios";

export const fetchAllStudents = createAsyncThunk("/students/all", async () => {
  try {
    const { data } = await axios.get("/api/user/all");
    return data;
  } catch (error) {
    // Handle the error and return it with rejectWithValue
    return error.response.data; // Assuming the error response contains error details
  }
});

const initialState = {
  data: null,
  status: "isLoading",
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllStudents.pending]: (state) => {
      state.status = "isLoading";
      state.data = null;
    },
    [fetchAllStudents.fulfilled]: (state, action) => {
      state.status = "isSuccess";
      state.data = action.payload;
    },
    [fetchAllStudents.rejected]: (state) => {
      state.status = "isError";
      state.data = null;
    },
  },
});

// export const selectorIsAuth = (state) => Boolean(state.auth.data);

export const studentsReducer = studentsSlice.reducer;
