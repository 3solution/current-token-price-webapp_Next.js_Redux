import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    tokenInfo: {},
  },
  reducers: {
    setTokenInfo: (state, payload) => {
      state.tokenInfo = payload.payload;
    },
  },
});

export const { setTokenInfo } = tokenSlice.actions;

export default tokenSlice.reducer;
