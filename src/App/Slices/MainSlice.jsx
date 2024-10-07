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
LoadingModalDisplay : 'none',
SharableLinkDisplay : 'none',
sideBarDisplay : 'none',
storeSelectedDate : 'none',
slotsModalDisplay : 'none',
availability : [],
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
            state.LoadingModalDisplay = 'flex'
        },

        hideLoadingModal : (state) => {
            state.LoadingModalDisplay = 'none'
        },

        displaySharableLinkModal : (state) => {
            state.SharableLinkDisplay = 'flex'
        },
        hideSharableLinkModal : (state)=> {
            state.SharableLinkDisplay = 'none'
        },
        setSharableLink : (state,action) => {
            state.UserInfo.sharableLink = action.payload
        },
        displaySideBar : (state) => {
            state.sideBarDisplay = 'grid';
        },
        hideSideBar : (state) => {
            state.sideBarDisplay = 'none'
        },

        // setters for create availability date and slots ->>

        setStoreSelectedDate : (state,action) => {

            state.storeSelectedDate = action.payload;
        },

        displaySlotsModal : (state) => {
            state.slotsModalDisplay = 'flex'
        },
        hideSlotsModal : (state) => {
            state.slotsModalDisplay = 'none'
        },
        setAvailability : (state,action)=> {
            state.availability = action.payload
        },
        pushdateToAvailability : (state,action) => {
            state.availability.push(action.payload)
        }
        // <<-
    }
})


export const {authenticationSuccess,setUserInfo,
displayLoginModal,hideLoginModal,
displayLoadingModal,hideLoadingModal,
displaySharableLinkModal,hideSharableLinkModal,
setSharableLink,displaySideBar,
hideSideBar,setStoreSelectedDate,displaySlotsModal
,hideSlotsModal,setAvailability,pushdateToAvailability} = reduxSlice.actions

export default reduxSlice.reducer;