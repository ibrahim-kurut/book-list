import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: "ibrahim kurut",
        isLogged: false,
    },
    reducers: {
        logout(state, action) {
            state.isLogged = !state.isLogged
        }
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer