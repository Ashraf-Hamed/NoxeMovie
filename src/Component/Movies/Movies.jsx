import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { UserContext } from "../../Context/UserContext";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import { FavoriteContext } from "../../Context/FavoriteContext";
import { SearchContext } from "../../Context/SearchContext";



export default function Movies() {

  const [page, setPage] = useState(1);

  

  
  let {search , wordSearch} = useContext(SearchContext)
  let items = []
  const [itemsArray, setItemsArray] = useState([])



  function getMovies(page) {
    return axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44&page=${page}`
    );
  }


  let { data, isLoading ,refetch } = useQuery("movies",  () => getMovies(page));
  
  function reFetch(num) {
    refetch();
    setPage(num);
    
  }


  useEffect(() => {
    console.log(data?.data.results)
    for (let i = 0; i < data?.data.results.length; i++) {
        if (data?.data.results[i].title.toLowerCase().includes(wordSearch.toLowerCase())) {
            items.push(data?.data.results[i])
            setItemsArray(items)
            console.log(items);
           
        }

    }
    console.log(itemsArray)
}, [wordSearch])





  return (
    <>
      <Helmet>
        <title>Movies Page </title>
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container my-5">
          <div className="row gy-4 justify-content-center align-items-center  ">
            {data?.data.results.map((movie, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="product p-2">
         
                  <Card movie={movie} />
                  
                </div>
              </div>
            ))}

          
           
          </div>

        
          <nav
          className="mt-3 nav d-flex align-items-center justify-content-center"
          aria-label="Page navigation">
          <ul className="pagination m-0">

            <li className="page-item mx-1 bg-warning border-0 mx-2">
              <button
                onClick={() => {
                  reFetch(page - 1);
                }}
                className="fw-bold bg-main btn border text-dark"
                disabled={page === "previous"}>
                previous
              </button>
            </li>

            <li className="page-item bg-warning border-0 mx-2">
              <button
                onClick={() => {
                  reFetch(1);
                }}
                className="fw-bold bg-main btn border text-dark"
                disabled={page === 1}>
                1
              </button>
              
            </li>

            
            <li className="page-item bg-warning border-0 mx-2">
              <button
                onClick={() => {
                  reFetch(2);
                }}
                className="fw-bold bg-main btn border text-dark"
                disabled={page === 2}>
                2
              </button>
              
            </li>
            <li className="page-item bg-warning border-0 mx-2 ">
              <button
                onClick={() => {
                  reFetch(page + 1 );
                }}
                className="fw-bold bg-main btn border text-dark"
                disabled={page === 'next'}>
                Next
              </button>
              
            </li>
          </ul>
        </nav>
  
        </div>

    
        
      )}

      
    </>
  );
}
