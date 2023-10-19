import React from 'react'

export default function Pagination() {



    const handlePageClick=(data)=>
    {
        console.log();(data)
        
    }
  return (
    <>
      
     
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={PageCount}
      previousLabel="< previous"
      containerClassName={'pagination justify-content-center  p-4'}
      pageClassName={'page-item p-1 '}
      pageLinkClassName={'page-link'}
      nextAriaLabel={''}
      previousClassName={'marginP'}  
      nextClassName={'marginN'}
      breakClassName={''}
    />
    </>
  )
}
