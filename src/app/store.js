import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "../features/ProductListSlice";
export const store = configureStore({
    reducer:{
        Product : ProductListSlice
    }
})