import { useState } from 'react'
import './App.css'

// allRoutes
import AllRoutes from './Routes/AllRoutes'

//modals
import { LoginModal , LoadingModal} from './Components/exports'

function App() {

  return (
    <>
    <AllRoutes/>
    <LoginModal/>
    <LoadingModal/>
    </>
  )
}

export default App
