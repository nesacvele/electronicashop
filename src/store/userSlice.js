import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        // logujemo usera
        loggedUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('elUser', JSON.stringify(action.payload));
            localStorage.setItem('elToken', JSON.stringify(action.payload.token));
            // console.log(action);
        },

        // resi bug
        restoreUser: (state,action) => {
            state.user = action.payload;
        },

        // izloguj usera
        clearUser: (state, action) => {
            state.user = {};
            localStorage.removeItem('elUser');
            localStorage.removeItem('elToken');

        }


    }
})

export const {loggedUser, restoreUser, clearUser } = userSlice.actions;
export default userSlice.reducer;