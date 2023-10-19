import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';
import { FavoriteContext } from '../../Context/FavoriteContext';

export default function StarDetails() {
    
    let params = useParams()
    let [Details , setStarDetails] = useState({})
    let { addToFavarite, warning , signInNow} = useContext(FavoriteContext)
   
       async function starDetails(id) {
           let {data} = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`)
           console.log(data);
           setStarDetails(data)
       }
   
   
       useEffect(() => {
        starDetails(params.id)
       } ,[])



     return (
       <>
   
       <Helmet>
       <title>{Details.name}</title>
      </Helmet>
   
   
      
       {!Details ? (
         <Loading />
       ) : Details ? (
           <div className="container">
           <div  className="row py-4 align-items-center " key={Details.id}>
           <div className="col-md-4 col-sm-6">
   
           <img className="w-100 img-thumbnail " src={'https://image.tmdb.org/t/p/w500/' + Details.profile_path} alt="" />   
   
           </div>
           <div className="col-md-8 col-sm-6">
             <h2 className="h5 fw-bold ">Star Name : <span className='main-color pt-5'> {Details.name} </span></h2>
             <h3 className="h5 py-3 fw-bold  ">Biography : <span className='main-color h6'> {Details.biography} </span></h3>
             
             <div className="d-flex justify-content-between mt-2">
             <span className="fw-bold ">
             Birthday :  <span className='main-color h6'>{Details.birthday}</span>
             
                
               </span>
               <span className="fw-bold">
               Place_of_birth : <span className='main-color h6'>{Details.place_of_birth}</span>
                
               </span>
             </div>
             <button     onClick={() => addToFavarite(Details.profile_path)}
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
