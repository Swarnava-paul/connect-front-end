import { createSlice } from "@reduxjs/toolkit";

const initialState = {
AuthenticationState : false,
UserInfo : {
   name : "",
   email : "",
   timeZone : "",
   sharableLink : ""
},
LoginModalDisplay : 'none',
LoadingModalDisplay : 'none'
};

const reduxSlice = createSlice({

    name : "MainSlice",
    initialState,

    reducers : {
      
        authenticationSuccess : (state) => {
            state.AuthenticationState = true
        }, // sets auth state to true if login success
        
        setUserInfo : (state,action) => {

            state.UserInfo = {
                ...state.UserInfo,
                ...action.payload
            }
        }, // sets user info 

        displayLoginModal : (state) => {
            state.LoginModalDisplay = 'block'
        },

        hideLoginModal : (state) => {
            state.LoginModalDisplay = 'none'
        },

        displayLoadingModal : (state) => {
            state.LoadingModalDisplay = 'block'
        },

        hideLoadingModal : (state) => {
            state.LoadingModalDisplay = 'none'
        }
    }
})


export const {authenticationSuccess,setUserInfo,
displayLoginModal,hideLoginModal,
displayLoadingModal,hideLoadingModal} = reduxSlice.actions

export default reduxSlice.reducer;