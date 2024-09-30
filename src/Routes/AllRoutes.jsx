import React from "react"
import { Routes , Route } from "react-router-dom"
import { Suspense } from "react"

// pages
const HomePage  = React.lazy(()=> import('../Pages/HomePage'));


const AllRoutes = () => {
  return (
    <Suspense fallback={<></>}>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="*" element={<>Page not Found Component...</>}/>
     </Routes>
    </Suspense>
  )
}

export default AllRoutes
