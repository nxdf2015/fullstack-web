import React from "react";
import { FormikProvider, useFormik } from "formik";
import * as yup from 'yup'

import serviceUser  from "../services/user"

const validationSchema = yup.object().shape({
    username: yup.string().required("username required").min(3),
    password: yup.string().required("password required")
})


const Login = ({visible, logged ,notify ,  isLogged}) => {
    
    const handleSubmit = async values => {
        
       const response =  await  serviceUser.logUser(values)
       
       if (response){
           
          await  localStorage.setItem("token",response.token)

          isLogged(true)
          notify({
              type:"success",
              message:`logged in`
          })
        }
        else {
            isLogged(false)
            notify({
                type:"error",
                message:"wrong username or password"
            })
              formik.setErrors({username: "invalid", password:"invalid"})
        } 
        formik.resetForm()
    }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit : handleSubmit ,
    validationSchema 
  });
  if (!(visible && !logged)){
      return null
  }

  return (
    <div>
        <h2>log into application</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
            {formik.touched.username && formik.errors.username}
        </div>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
         <div>
            {formik.touched.password && formik.errors.password}
        </div>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <input type="submit" value="login"/>
      </form>
    </div>
  );
};

export default Login;
