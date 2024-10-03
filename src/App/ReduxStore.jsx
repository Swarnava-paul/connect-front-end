import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import loadingReducer from './slices/loadingSlice'
import reduxSlice from './Slices/MainSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        loading: loadingReducer,
        slice : reduxSlice
    },
})
