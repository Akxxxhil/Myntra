import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    value: []
}

export const AddtoBag = createSlice({
    name: "AddtoBag",
    initialState ,
    reducers: {
        AddBag: (state, action) => {
            state.value.push(action.payload)
        },
        RemoveBag: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload)
        }
    }
})

export const { AddBag, RemoveBag,Addwishlist} = AddtoBag.actions

export default AddtoBag.reducer