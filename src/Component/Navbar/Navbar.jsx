import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';
import { SearchContext } from '../../Context/SearchContext';
import { FavoriteContext } from '../../Context/FavoriteContext';

export default function Navbar() {


let {userToken ,setUserToken} = useContext(UserContext)
let {count} = useContext(FavoriteContext)

 
 let {search} = useContext(SearchContext)


 let navigate = useNavigate();


  function logout() {
    localStorage.removeItem('userToken');
    setUserToken(null);
     navigate('/login')
  }





  return (
    <>
    

    <nav className="navbar navbar-expand-sm navbar-light bg-dark position-sticky ">
        <div className="container">
        <Link className="navbar-brand fs-2 " to={'/'}>Noxe</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse py-2 ms-5  " id="collapsibleNavId">

          <ul className="navbar-nav me-auto mt-2 mt-lg-0"> 

          {userToken !== null ? <>
            <li className="nav-item">
            <NavLink className="nav-link " to={'/'} >Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'movie'}>Movies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'Tv'}>Tv Show</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'star'}>Star</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/favorite">
          <i className="fa-solid fa-heart text-danger mx-2 fs-4 position-relative">
          <span className="position-absolute favitem top-0 start-100 translate-middle badge rounded-pill bg-danger">
             {count}
           </span>
          </i>
          </NavLink>
          </li>

          
            </>  : ''}
           
          
          </ul>


          {userToken !== null ? 
          <div className="input-group  w-25">
          <input   onChange={search}   type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          </div>
          : 

          <div className="input-group  w-25">
          <input disabled  onChange={search} type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          </div>
          }
       

          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">

           {userToken !== null ? <>
          

            <li className="nav-item cursor-pointer">
            <a className="nav-link"   onClick={() => logout()} >Logout <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i></a>
          </li>
            </> : <>
            <li className="nav-item">
            <NavLink className="nav-link" to={'login'} aria-current="page">Login </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'register'}>Register</NavLink>
          </li>
            </>}
           
           
            
          </ul>
        
        </div>
      </div>
    </nav>
    
      
    </>
  )
}
