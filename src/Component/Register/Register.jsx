import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {

  let navigate = useNavigate()
let [error , setError] = useState(null)
let [isLoading, setisLoading] = useState(false);

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "min length is 3 char")
      .max(7, "max is 7 char")
      .required("name is required"),
      email: Yup.string().email("email not valid").required("email is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password not valid")
      .required("passWord is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Not matching password")
      .required("repassword is required"),
    phone: Yup.string()
      .matches(/^(002)?01[0-25][0-9]{8}$/, "not match")
      .required("phone is required"),
  });

  async function registerSubmit(values) {
    console.log(values);
    setisLoading(true)

    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , values).catch((error) => {
      setisLoading(false);
    setError(error.response.data.message);
    })
    console.log(data);

    if(data.message === 'success') {

      setisLoading(false)
      navigate('/login')

    }
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },

    validationSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Register page</title>
      </Helmet>


      {error ? <div className='alert alert-danger '>{error}</div> :  ''} 

      <div className="container mt-5 py-5">
      <form className=" w-75 mx-auto vh-100 " onSubmit={formik.handleSubmit}>
      <h3 className="mb-5 text-white">Register Now:</h3>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control "
          id="floatingName"
          placeholder="Name "
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="floatingName text-dark">Name </label>
      </div>
      {formik.errors.name && formik.touched.name ? (
        <p className="alert alert-danger">{formik.errors.name}</p>
      ) : (
        ""
      )}


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
    
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingConfirmPassword"
          placeholder="ConfirmPassword"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="rePassword"
        />
        <label htmlFor="floatingPassword">Confirm Password</label>
      </div>
      {formik.errors.rePassword && formik.touched.rePassword ? (
        <p className="alert alert-danger">{formik.errors.rePassword}</p>
      ) : (
        ""
      )}

   
      <div className="form-floating mb-3">
        <input
          type="tel"
          className="form-control"
          id="floatingTel"
          placeholder="Tel .."
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="phone"
        />
        <label htmlFor="floatingPassword">Phone</label>
      </div>
      {formik.errors.phone && formik.touched.phone ? (
        <p className="alert alert-danger">{formik.errors.phone}</p>
      ) : (
        ""
      )}

      {isLoading ?    <button
        className="button-52 fw-bold d-block ms-auto"
        role="button"
        type="submit"
      >
      <i className="fa-solid fa-spinner fa-spin"></i>
      </button>   :   <button
      className="button-52 fw-bold d-block ms-auto"
      role="button"
      type="submit"
    >
      Register Now
    </button> }

  
  
     
    </form>
      </div>
    </>
  );
}
