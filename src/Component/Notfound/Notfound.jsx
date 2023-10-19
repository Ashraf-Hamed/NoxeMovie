import React from 'react'

export default function Notfound() {
  return (
    <>
       <div className="container py-5" >
       
       <div className='ErrorPage'>
       <div className="container text-center">
         <h1 className='fw-bold error-page'>404 <i className="fa-solid fa-triangle-exclamation"></i></h1>
         <span>Page not Found</span>
         <p className='mt-5 text-white'>We couldn't find what you were looking for.</p>
         <p className='fw-bold'>Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
       </div>
     </div>
       </div>
    </>
  )
}
