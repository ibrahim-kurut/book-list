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

// ========= insert a new book =========
export const insertBook = createAsyncThunk("book/insertBook", async (bookData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const response = await fetch("http://localhost:3001/books", {
            method: "POST",
            body: JSON.stringify(bookData),
            headers: { "Content-Type": "application/json" }
        })
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

// ========= delete a book =========
export const deleteBook = createAsyncThunk("book/deleteBook", async (bookId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        await fetch(`http://localhost:3001/books/${bookId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        return bookId;
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
        },

        //!==================== insert a book ====================
        [insertBook.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
        },
        [insertBook.fulfilled]: (state, action) => {
            state.isLoading = false
            state.books.push(action.payload)
        },
        [insertBook.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        //!==================== delete book ====================
        [deleteBook.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.isLoading = false
            state.books = state.books.filter(book => book.id !== action.payload)
        },
        [deleteBook.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

    }
})


export default bookSlice.reducer