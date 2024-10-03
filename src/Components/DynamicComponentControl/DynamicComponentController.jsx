
import { createContext , useReducer } from "react";

//components
import {CreateAvailability,SharableLink,
ViewMeetings,
WelcomeMessage,TimeZone
} from '../exports'


export const DynamicComponentContext = createContext();

function returnDynamicComponent (state,action) {
 switch (action.type) {
    case 'WelcomeMessage' : {
        return WelcomeMessage
    }
    case 'CreateAvailability' : {
        return CreateAvailability
    }
    case 'SharableLink':{
        return SharableLink
    }
    case 'ViewMeetings':{
        return ViewMeetings
    }
    case 'TimeZone':{
        return TimeZone
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