import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Increment: (state) => {state.value += 1},
    Decrement: (state) => {state.value -= 1},
  },
});


export const { Increment, Decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
