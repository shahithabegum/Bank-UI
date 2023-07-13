import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import "./login.css";
import { Link } from "react-router-dom";
import LoginValidation from "./LoginValidation";
import { login } from "../../../service/UserAuth";
import { useNavigate } from "react-router-dom";
import { authservice } from "../../../service/AuthService";
import {toast} from 'react-toastify'
const Login = () => {
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:LoginValidation,
    onSubmit:(values,{resetForm})=>{
      console.log(values)
      handleSubmit(values)
      resetForm();

  }
  });
  const handleSubmit =(values)=>{
    login(values).then(response=>{
      console.log(response.data)
      if(response.data.isSuccess==="true"){
        navigate('/otp')
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }
    })
  }
  if(!authservice.isAuthenticated){
    navigate('/login')
  }
  return (
    <div className="login col-sm-12">
      <Row className="d-flex">
        <Col lg={6} className="formcol">
          <div className="formcontainer m-auto">
            <form className="form" onSubmit={formik.handleSubmit}>
              <h1 className="text-center">Sign In</h1>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <label for="email" className="form-label">
                    User Name
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email&& formik.errors.email ? (<p style={{color:'red'}}>{formik.errors.email}</p>) :
                  null}
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12} className="mt-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input 
                      id="password" 
                  type="password"
                  name="password"
                   className="form-control" 
                   placeholder="Enter Your Password"
                  {...formik.getFieldProps("password")} />
                </Col>
                {formik.touched.password && formik.errors.password ? (<p style={{color:'red'}}>{formik.errors.password}</p>) :
                  null}
              </Row>
              <Row className="align-item-center">
                <Col lg={6} md={6} sm={6} p={0} className="mt-3  d-flex">
                <Button className="btn btn-primary mx-auto button " type="submit">Submit</Button>
                </Col>
                <Col lg={6} md={6} sm={6} p={0} className="mt-3 d-flex">
                  
                  <Link to="/forgetpassword" className="link mx-auto ">forgot password ?</Link>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
        <Col lg={6} className="contentcol">
          <h1 className="text-center">
            
            Welcome to <b>INFY BANK</b>
          </h1>
          <p className="text-center">Login to access your account</p>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
