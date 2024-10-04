import { useState } from 'react'
import './App.css'

// allRoutes
import AllRoutes from './Routes/AllRoutes'

//modals
import { LoginModal , LoadingModal ,
GenerateSharableLinkModal,HamburgerIcon
} from './Components/exports'

function App() {

  return (
    <>
    <AllRoutes/>
    <HamburgerIcon/>
    <LoginModal/>
    <LoadingModal/>
    <GenerateSharableLinkModal/>
    </>
  )
}

export default App
