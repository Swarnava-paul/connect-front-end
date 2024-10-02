import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    token: null,
    userInfo: {
        name: null,
        timeZone: null,
        sharableLink: null,
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { name, timeZone, sharableLink } = action.payload
            state.userInfo = {
                name,
                timeZone,
                sharableLink,
            }
            state.isAuthenticated = true
        },
        setToken: (state, action) => {
            state.token = action.payload
            state.isAuthenticated = true 
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.token = null
            state.userInfo = {
                name: null,
                timeZone: null,
                sharableLink: null,
            }
        }
    }
})

export const { setToken, setUser,logout } = authSlice.actions

export default authSlice.reducer