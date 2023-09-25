import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  theme: "dark" | "light";
}

const initialState: CounterState = {
  value: 0,
  theme: "light",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
