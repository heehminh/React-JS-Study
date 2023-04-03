import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const asyncUpFetch = createAsyncThunk(
  "counterSlice/asyncUpFetch", // action type
  async () => {
    const resp = await fetch(
      "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
    );
    const data = await resp.json();
    return data.value;
  }
);
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, status: "Welcome" },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    // 비동기 작업은 extraReducers 사용
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
export { asyncUpFetch };
