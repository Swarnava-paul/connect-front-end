import { useState } from 'react'
import './App.css'

// allRoutes
import AllRoutes from './Routes/AllRoutes'

//modals
import { LoginModal , LoadingModal ,
GenerateSharableLinkModal,
SlotsModal,HamburgerIcon
} from './Components/exports'

function App() {

  return (
    <>
    <AllRoutes/>
    <HamburgerIcon/>
    <LoginModal/>
    <LoadingModal/>
    <GenerateSharableLinkModal/>
    <SlotsModal/>
    </>
  )
}

export default App
