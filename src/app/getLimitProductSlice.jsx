
import { createSlice } from "@reduxjs/toolkit";

export const getLimitProductSlice = createSlice({
  name: "limitProduct",
  initialState: {
    items: null,
  },
  reducers: {
    addLimitProduct: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addLimitProduct } = getLimitProductSlice.actions;
export default getLimitProductSlice.reducer;
