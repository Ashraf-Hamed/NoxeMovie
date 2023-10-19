
import { useContext, useEffect } from "react"
import { Helmet } from "react-helmet"
import { FavoriteContext } from "../../Context/FavoriteContext"
import { toast } from 'react-hot-toast';
import { Link } from "react-router-dom";
export default function Favarite() {
    let { favariteArr, clearAll, clearItem } = useContext(FavoriteContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return <>

        <Helmet>
            <title>Favarites Page </title>
        </Helmet>
        <div className={`container py-5  bg-dark mt-5 `}>
            <div className="row g-2">
                <div className="d-flex justify-content-between ">
                    <p className={`my-3 text-white h6 fw-bold`}>The Items that you added in Favorites</p>
                    {localStorage.getItem('favariteArr') !==null ? <button  onClick={clearAll} className={`btn btn-danger ms-5 py-0 px-5`}>Clear All</button> : ''}
                </div>
                {localStorage.getItem('favariteArr') === null ? <p className="text-danger">*No Item added yet</p> : '  '}


                {Array.from(new Set(favariteArr)).map((movie, index) => (
                    <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-2 py-4 ">
                        <div className="position-relative ">
                            <img className="w-100 img-thumbnail " src={'https://image.tmdb.org/t/p/w500/' + movie} alt="" />
                        </div>
                          <div className="">
                          
                          <div onClick={() => { clearItem(movie) }} className={` m-2 fs-2  rounded-circle top-0 end-0 text-white `}>
                               <button className="btn btn-warning text-white mx-auto d-block mt-4">Remove Movie</button>             
                        </div>
                    </div>
                    
                    </div>
                ))}
                

            </div>
           <Link to= {'/'}> <button className="btn btn-primary  d-block ms-auto" >Back Home</button></Link>
        </div>




    </>
}
