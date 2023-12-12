import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        category : []
    },
    reducers: {
        categoryHandler: (state, action) => {
            // console.log(action.payload);
            state.category = action.payload
        }
    }
})

export const {categoryHandler} = productSlice.actions;
export default productSlice.reducer;