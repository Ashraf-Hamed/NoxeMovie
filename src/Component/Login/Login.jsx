import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext";

export default function Register() {

  let {setUserToken} = useContext(UserContext)

  let navigate = useNavigate()
let [error , setError] = useState(null)
let [isLoading, setisLoading] = useState(false);

  let validationSchema = Yup.object({
    
      email: Yup.string().email("email not valid").required("email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password not valid")
      .required("passWord is required"),
    
  });

  async function registerSubmit(values) {
    console.log(values);
    setisLoading(true)

    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , values).catch((error) => {
      setisLoading(false);
    setError(error.response.data.message);
    })
    console.log(data);

    if(data.message === 'success') {

      setisLoading(false)
      localStorage.setItem('userToken' , data.token)
      setUserToken(data.token)
      navigate('/')

    }
  }

  let formik = useFormik({
    initialValues: {
     
      email: "",
      password: "",
     
    },

    validationSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Login page</title>
      </Helmet>


      {error ? <div className='alert alert-danger '>{error}</div> :  ''} 
      <div className="container mt-5 py-5">
      <form className=" w-75 mx-auto vh-100 " onSubmit={formik.handleSubmit}>
      <h3 className="mb-5 text-white">Login Now:</h3>
  


      <div className="form-floating mb-3">
      <input
        type="email"
        className="form-control text-dark"
        id="floatingInput"
        placeholder="name@example.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="email"
      />
      <label htmlFor="floatingInput text-dark">Email address</label>
    </div>
    {formik.errors.email && formik.touched.email ? (
      <p className="alert alert-danger">{formik.errors.email}</p>
    ) : (
      ""
    )}
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      {formik.errors.password && formik.touched.password ? (
        <p className="alert alert-danger">{formik.errors.password}</p>
      ) : (
        ""
      )}
    
    

      {isLoading ?    <button
        className="button-52 fw-bold "
        role="button"
        type="submit"
      >
      <i className="fa-solid fa-spinner fa-spin"></i>
      </button>   :   <button
      className="button-52 fw-bold "
      role="button"
      type="submit"
    >
      Login Now   
    </button>  }
    <Link to= '/register' className="ms-3" >I do not have an account ! <span className="main-color">Sign Up</span> </Link>
    
  
  
     
    </form>
      </div>
     
    </>
  );
}
