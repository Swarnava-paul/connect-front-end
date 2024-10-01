import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: null,
    isAuthenticated: false,
    user: null,
    loading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
            state.isAuthenticated = true 
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearAuth: (state) => {
            state.token = null
            state.isAuthenticated = false
            state.user = null
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const {setToken, setUser, clearAuth,setLoading} = authSlice.actions

export default authSlice.reducer