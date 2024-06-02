import { configureStore } from "@reduxjs/toolkit";
import bagreducer from "../Redux/Slicer/AddtoBag"
import wishlistReducer from "./Slicer/WishlistSlice"
export const store=configureStore({
    reducer:{
        AddtoBag:bagreducer,
        wishlist: wishlistReducer,
    }
})