import {configure} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

export const store = configure({
    reducer: {
        auth: authReducer,
    },
})