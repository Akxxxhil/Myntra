import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        Addwishlist: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { Addwishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
