import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementYetiskinler: (state) => {
      state.value += 1;
    },
    decrementYetiskinler: (state) => {
      state.value -= 1;
    },
    incrementByAmountYetiskinler: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementYetiskinler,
  decrementYetiskinler,
  incrementByAmountYetiskinler,
} = counterSlice.actions;

export default counterSlice.reducer;
