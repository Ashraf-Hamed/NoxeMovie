import React from "react";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <>
      <Link to={"/movieDetails/" + movie.id}>
        <div className="card bg-dark overflow-hidden   ">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            className="w-100  position-relative "
            alt=""
          />
          <div className="overlay">
            <div className="card-body">
              <h4 className="card-title h6 fw-bold py-1 text-white ">
                Movie Name :{" "}
                <span className="main-color">
                  {movie.title}
                </span>
              </h4>
              <h4 className="card-title h6 fw-bold py-1 text-white ">
                Overview :{" "}
                <span className="main-color">
                  {movie.overview.split(" ").slice(0,10).join(" ")}
                </span>
              </h4>

            </div>
            
          </div>

        </div>
      </Link>
    </>
  );
}
