import { createSlice } from "@reduxjs/toolkit";

export const allStates = createSlice({
  name: "header",
  initialState: {
    bigSearchIcon: false,
    opened: false,
    yetiskinler: 0,
    cocuklar: 0,
    bebekler: 0,
    hayvanlar: 0,
    showSecondBar: false,
    bigNav: false,
  },
  reducers: {
    bigSearchIcon: (state) => {
      state.bigSearchIcon = !state.bigSearchIcon;
    },
    opened: (state) => {
      state.opened = !state.opened;
    },
    yetiskinler: (state, action) => {
      state.yetiskinler = action.payload;
    },
    cocuklar: (state, action) => {
      state.cocuklar = action.payload;
    },
    bebekler: (state, action) => {
      state.bebekler = action.payload;
    },
    hayvanlar: (state, action) => {
      state.hayvanlar = action.payload;
    },
    showSecondBar: (state) => {
      state.showSecondBar = !state.showSecondBar;
    },
    bigNav: (state) => {
      state.bigNav = !state.bigNav;
    },
  },
});

export const {
  bigSearchIcon,
  opened,
  yetiskinler,
  cocuklar,
  bebekler,
  hayvanlar,
  showSecondBar,
  bigNav,
} = allStates.actions;

export default allStates.reducer;
