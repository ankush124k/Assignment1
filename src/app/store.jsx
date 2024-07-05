
import { configureStore } from "@reduxjs/toolkit";
import getAllProductReducer from "../app/getAllProductSlice";
import limitProductReducer from "../app/getLimitProductSlice"; // Fixed path

export default configureStore({
  reducer: {
    getAllProduct: getAllProductReducer,
    limitProduct: limitProductReducer,
  },
});
