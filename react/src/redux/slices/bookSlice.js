import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: []
    },
    extraReducers: {}
})


export default bookSlice.reducer