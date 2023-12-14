import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        category : [],
        currentCategory: 'smartphones',
    },
    reducers: {
        categoryHandler: (state, action) => {
            // console.log(action.payload);
            state.category = action.payload
        },
        productHandler: (state, action) => {
            state.products = action.payload;
        },
        currentCategoryHandler: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
})

export const {categoryHandler, productHandler, currentCategoryHandler} = productSlice.actions;
export default productSlice.reducer;