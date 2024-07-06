import { configureStore } from '@reduxjs/toolkit'
import books from '../slices/bookSlice'
import auth from '../slices/authSlice'


export const store = configureStore({
    reducer: {
        books,
        auth
    },
})
