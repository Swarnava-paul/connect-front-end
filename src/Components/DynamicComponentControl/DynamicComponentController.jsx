
import { createContext , useReducer } from "react";

//components
import {CreateAvailability,GenerateSharableLink,
ViewMeetings,ManageAccount,CustomizeBookingPage,
WelcomeMessage
} from '../exports'

// eslint-disable-next-line react-refresh/only-export-components
export const DynamicComponentContext = createContext();

function returnDynamicComponent (state,action) {
 switch (action.type) {
    case 'WelcomeMessage' : {
        return WelcomeMessage
    }
    case 'CreateAvailability' : {
        return CreateAvailability
    }
    case 'GenerateSharableLink':{
        return GenerateSharableLink
    }
    case 'ViewMeetings':{
        return ViewMeetings
    }
    case 'ManageAccount':{
        return ManageAccount
    }
    case 'CustomizeBookingPage':{
        return CustomizeBookingPage
    }
 }
}

export const DynamicComponentProvider = ({children}) => {

    const [Component,requestDynamicComponent] = useReducer(returnDynamicComponent,WelcomeMessage)

    return (
        <DynamicComponentContext.Provider value={{Component,requestDynamicComponent}}>
        {children}
        </DynamicComponentContext.Provider>
    )
}