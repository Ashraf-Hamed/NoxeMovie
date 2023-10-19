import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function TrendingStar() {

    let [trendStar, setTrendStar] = useState([]);

    async function getStar() {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/person/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
      );
      setTrendStar(data.results);
      console.log(data.results);
    }
  
    useEffect(() => {
        getStar();
    }, []);
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      // arrows : false,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };


    return (
        <>
          <div className="container">
            <h3 className="fw-bold main-color  mt-5  p-3 MainTitle">
              
              Trending Star...
            </h3>
    
            <div className="row my-5 gx-2">
              {trendStar ? (
                <Slider {...settings}>
                  {trendStar.slice(0, 10).map((movie, index) => (
                    <div className="col-6 col-md-4  box" key={index}>
                    
                    <Link to={"/starDetails/" + movie.id}>
                      <img
                        src={'https://image.tmdb.org/t/p/w500/' + movie.profile_path}
                        className="w-100 movieImg"
                        alt="posterFilm"
                      />
                      </Link>
                    </div>
                  ))}
                </Slider>
              ) : (
                ""
              )}
            </div>
    
        <Link className='moreBtnStyle' to='/star'>More</Link>
          </div>
        </>
      );
}
