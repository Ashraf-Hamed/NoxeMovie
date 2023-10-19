import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { FavoriteContext } from '../../Context/FavoriteContext'
import toast from 'react-hot-toast'


export default function MovieDetails() {

  let params = useParams()
  let [details , setDetails] = useState({})
  let { addToFavarite, warning , signInNow} = useContext(FavoriteContext)

 
  











    async function MovieDetails(id) {
        let {data} =await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`)
        console.log(data);
        setDetails(data)
    }


    useEffect(() => {
        MovieDetails(params.id)
    } ,[])
  return (
    <>

    <Helmet>
    <title>{details.title}</title>
   </Helmet>


   
    {!details ? (
      <Loading />
    ) : details ? (
        <div className="container">
        <div  className="row py-4 align-items-center " key={details.id}>
        <div className="col-md-4 col-sm-6">

                <img key={details.id} src={'https://image.tmdb.org/t/p/w500/' + details.poster_path} className="w-100 img-thumbnail "  />   

        </div>
        <div className="col-md-8 col-sm-6">
          <h2 className="h5 fw-bold">MoveName : <span className='main-color'> {details.title}</span></h2>
          <h3 className="h5 py-3 fw-bold ">Overview : <span className='main-color h6'> {details.overview}</span></h3>
          
          <div className="d-flex justify-content-between mt-2">
          <span className="fw-bold ">
          ratingsQuantity : {details.vote_average}
          <i className="fa-solid fa-star text-warning ms-2 "></i>
             
            </span>
            <span className="fw-bold">
            rate Count : {details.vote_count}  
             
            </span>
          </div>
          <button     onClick={() => addToFavarite(details.poster_path)}
        className="btn bg-warning text-dark fw-bold form-control  mt-5"  >
            Add to whishlist
          </button>
          {localStorage.getItem('userToken') === null ?
          <div className="mb-5">
              <p className="text-danger">{warning}</p>
              <Link className={`text-white  mt-3`} to='/login'>{signInNow} </Link>
          </div> : ''}
        </div>
      </div>
        </div>
    ) : (
      ""
    )}
  </>


   

    
  )
}
