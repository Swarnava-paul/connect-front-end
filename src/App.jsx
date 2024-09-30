import { useState } from 'react'
import './App.css'

// allRoutes
import AllRoutes from './Routes/AllRoutes'

//modals
import { LoginModal } from './Components/exports'

function App() {

  return (
    <>
    <AllRoutes/>
    <LoginModal/>
    </>
  )
}

export default App
