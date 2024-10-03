import React from "react"
import { Routes , Route } from "react-router-dom"
import { Suspense } from "react"

// pages
const HomePage  = React.lazy(()=> import('../Pages/HomePage'));
const ViewSharableLink = React.lazy(()=> import('../Pages/ViewSharableLink'))
const PrivacyAndPolicy = React.lazy(()=>import('../Pages/PrivacyAndPolicy'))

const AllRoutes = () => {
  return (
    <Suspense fallback={<></>}>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/viewSharable" element={<ViewSharableLink/>}/>
        <Route path='/privacy&policy'/>
        <Route path="*" element={<>Page not Found Component...</>}/>
     </Routes>
    </Suspense>
  )
}

export default AllRoutes
