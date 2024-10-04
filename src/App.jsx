import { useState } from 'react'
import './App.css'

// allRoutes
import AllRoutes from './Routes/AllRoutes'

//modals
import { LoginModal , LoadingModal ,
GenerateSharableLinkModal
} from './Components/exports'

function App() {

  return (
    <>
    <AllRoutes/>
    <LoginModal/>
    <LoadingModal/>
    <GenerateSharableLinkModal/>
    </>
  )
}

export default App
