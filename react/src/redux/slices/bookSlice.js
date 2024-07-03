import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ========= get books =========

export const getBooks = createAsyncThunk("book/getBooks", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const response = await fetch("http://localhost:3001/books");
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [getBooks.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false
            state.books = action.payload
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }

    }
})


export default bookSlice.reducer