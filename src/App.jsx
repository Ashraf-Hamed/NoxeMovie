import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Movies from './Component/Movies/Movies'
import Tv from './Component/Tv/Tv'
import Actor from './Component/Actor/Actor'
import Favorite from './Component/Favorite/Favorite'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import Notfound from './Component/Notfound/Notfound'
import MovieDetails from './Component/MovieDetails/MovieDetails'
import TvDetails from './Component/TvDetails/TvDetails'
import StarDetails from './Component/StarDetails/StarDetails'
import { Toaster } from 'react-hot-toast'

export default function App() {




  const routes = createHashRouter([
    {path : '' , element : <Layout/> , children : [
      {index : true , element : <Home/>},
      {path : 'movie' , element : <Movies/>},
      {path : 'movieDetails/:id' , element : <MovieDetails/>},
      {path : 'Tv' , element : <Tv/>},
      {path : 'TVDetails/:id' , element : <TvDetails/>},
      {path : 'star' , element : <Actor/>},
      {path : 'starDetails/:id' , element : <StarDetails/>},
      {path : 'favorite' , element : <Favorite/>},
      {path : 'login' , element : <Login/>},
      {path : 'register' , element : <Register/>},
      {path : '*' , element : <Notfound/>},
    ]}
  ])

  return (
    <>

    <RouterProvider router={routes}></RouterProvider>
    <Toaster/>
    </>
  )
}
