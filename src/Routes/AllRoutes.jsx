import React from "react"
import { Routes , Route } from "react-router-dom"
import { Suspense } from "react"

// pages
const Dashboard  = React.lazy(()=> import('../Pages/Dashboard'));
const ViewSharableLink = React.lazy(()=> import('../Pages/ViewSharableLink'))
const PrivacyAndPolicy = React.lazy(()=>import('../Pages/PrivacyAndPolicy'))

const AllRoutes = () => {
  return (
    <Suspense fallback={<></>}>
     <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path="/Sharable/:id" element={<ViewSharableLink/>}/>
        <Route path='/privacy&policy' element={<PrivacyAndPolicy/>}/>
        <Route path="*" element={<>Page not Found Component...</>}/>
     </Routes>
    </Suspense>
  )
}

export default AllRoutes
