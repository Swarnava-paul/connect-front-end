import { configureStore } from '@reduxjs/toolkit'
import reduxSlice from './Slices/MainSlice'

export const store = configureStore({
  reducer: {
    slice : reduxSlice
  },
})

