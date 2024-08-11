import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Loading from '../../assets/images/loading.png'

const Home = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import("../../pages/Dashboard/Home")), 1500)
}))
const Profile = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import("../../pages/Dashboard/Profile")), 1500)
}))

function index() {
  return ( 
    <div className='container mx-auto px-10 flex justify-between'>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={
            <div className='flex items-start justify-start mr-[200px] p-[300px]'>
              <img src={Loading} alt="Loading..." width={150} height={150} />
            </div>
          }>
            <Home/>
          </Suspense>
        }/>
        <Route path='profile' element={
          <Suspense fallback={
            <div  className='flex items-start justify-start mr-[200px] p-[300px]'>
              <img src={Loading} alt="Loading..." width={100} height={100} />
            </div>
          }>
            <Profile/>
          </Suspense> 
        }/>
      </Routes>
    </div>
  )
}

export default index
