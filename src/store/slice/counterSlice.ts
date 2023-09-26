import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 19,
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
    incrementByRandom: (state, { payload }: PayloadAction<number>) => {
      state.value = state.value + payload;
    },
  },
});

export const { increment, decrement, incrementByRandom } = counterSlice.actions;
export default counterSlice.reducer;
