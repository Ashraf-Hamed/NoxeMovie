import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import Footer from '../Footer/Footer'

export default function Layout() {

 let {setUserToken} = useContext(UserContext)



 useEffect(() => {

   if(localStorage.getItem('userToken') !== null) {
    setUserToken(localStorage.getItem('userToken'))
   }

 } ,[])
  return (
    <>


    <div className="parent">

    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
      
    </>
  )
}
