import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../util/axios";

export const fetchAllGroups = createAsyncThunk("/groups/all", async () => {
  try {
    const { data } = await axios.get("/api/group/all");
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

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllGroups.pending]: (state) => {
      state.status = "isLoading";
      state.data = null;
    },
    [fetchAllGroups.fulfilled]: (state, action) => {
      state.status = "isSuccess";
      state.data = action.payload;
    },
    [fetchAllGroups.rejected]: (state) => {
      state.status = "isError";
      state.data = null;
    },
  },
});

// export const selectorIsAuth = (state) => Boolean(state.auth.data);

export const groupsReducer = groupsSlice.reducer;
