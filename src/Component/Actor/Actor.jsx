import axios from 'axios';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

export default function Actor() {
  
  const [page, setPage] = useState(1);

  function getStar(page) {
    return axios.get(
      `https://api.themoviedb.org/3/trending/person/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44&page=${page}`
    );
  }


  let { data, isLoading ,refetch } = useQuery("movies",  () => getStar(page));
 
 
  function reFetch(num) {
    refetch();
    setPage(num);
  }


  




  return (
    <>
      <Helmet>
        <title>Star Page </title>
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container my-5">
          <div className="row gy-4">
            {data?.data.results.map((star, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="product p-2">
                <Link to={"/starDetails/" + star.id}>
                <div className="card bg-dark overflow-hidden   ">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + star.profile_path}
                    className="w-100  position-relative "
                    alt=""
                  />
                  <div className="overlay">
                    <div className="card-body">
                      <h4 className="card-title h6 fw-bold py-1 text-white ">
                        star Name :{" "}
                        <span className="main-color mb-5 py-5">
                          {star.original_name}
                        </span>
                      </h4>
                      
                    </div>
                  </div>
                </div>
              </Link>
                  
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
