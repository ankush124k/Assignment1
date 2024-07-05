import { createSlice } from "@reduxjs/toolkit";

export const getAllProductSlice = createSlice({
  name: "getAllProduct",
  initialState: {
    allProducts: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const {addProduct} = getAllProductSlice.actions;
export default getAllProductSlice.reducer;
