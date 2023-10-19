  import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { UserContext } from './../../Context/UserContext';
import TrendingMovies from "../TrendingMovies/TrendingMovies";
import TrendingTvShow from "../TrendingTv/TrendingTvShow";
import TrendingStar from "../TrendingStar/TrendingStar";
import FixedElement from "../FixedElement/FixedElement";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Home() {

 let {userToken} = useContext(UserContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page </title>
      </Helmet>
      


      <header className="home vh-100 d-flex align-items-center " > 
      <div className="container">
      
            <div className="content">
            <h1 className="fw-bold">Free Movies to Watch,</h1>
            <h1 className="fw-bold">Anytime Anywhere.</h1>
            <p className="mt-3 text-light fs-4">The search is over! Let Noxe help you find the perfect</p>
            <p className=" text-light fs-4">movie to watch tonight for free</p>

            <div className="btns mt-5">
            {userToken !== null ? <>
              <Link to={'movie'}>  <button className="btn btn-warning mx-2 text-white border-1 fw-bold p-3">Movies</button></Link>
              <Link to={'Tv'}> 
              <button className="btn btn-warning mx-2 text-white border-1 fw-bold p-3">Tv Shows</button></Link>
              <Link to={'star'}>  <button className="btn btn-warning mx-2 text-white border-1 fw-bold p-3">Star</button></Link>
            
              
              </> : <button className="btn btn-warning mx-2 text-white rounded-pill fw-bold p-3">Get Started</button>}
            </div>

            </div>

            <a href="#trendMovie" className="down-icon"></a>

            <FixedElement/>
          </div>

      </header>

      <TrendingMovies/>
      <TrendingTvShow/>
      <TrendingStar/>
      </>
  );
}
