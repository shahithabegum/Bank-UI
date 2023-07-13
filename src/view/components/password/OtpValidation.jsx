import React from 'react'
import { Button, Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { otp } from "../../../service/UserAuth";
import { useNavigate } from "react-router-dom";
import { authservice } from "../../../service/AuthService";
import {toast} from 'react-toastify'

const OtpValidation = () => {
    let navigate = useNavigate()
    const formik = useFormik({
      initialValues: {
        otp: "",
        
      },
      
      onSubmit:values=>{
        console.log(values)
        handleSubmit(values)
        
  
    }
    });
    const handleSubmit =(values)=>{
        otp(values).then(res=>{
          console.log(res.data)
         
          let newuser=res.data.result.user.newuser
          console.log(newuser)
          if(res.data.isSuccess==="true" && newuser==="true"){
            navigate('/commonlayout/changepassword')
            toast.success(res.data.message)
            authservice.setAuthToken(res.data.result.token)
            authservice.setCurrentUser(res.data.result.user)
          }
          else if(res.data.isSuccess==="true"){
            navigate('/commonlayout/landingpage')
            toast.success(res.data.message)
            authservice.setAuthToken(res.data.result.token)
            authservice.setCurrentUser(res.data.result.user)
          }
          else{
            toast.error(res.data.message)
            console.log("login failed")
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
                  <h1 className="text-center">Verify OTP</h1>
                  <Row>
                    <Col lg={12} md={12} sm={12}>
                      <input
                        id="otp"
                        type="otp"
                        name="otp"
                        className="form-control"
                        placeholder="Enter Otp"
                        {...formik.getFieldProps("otp")}
                      />
                      {formik.touched.otp&& formik.errors.otp ? (<p style={{color:'red'}}>{formik.errors.otp}</p>) :
                      null}
                    </Col>
                  </Row>
                  <Row className="align-item-center">
                    <Col lg={12} md={12} sm={12} p={0} className="mt-3  d-flex">
                    <Button className="btn btn-primary btn-btn-block  " type="submit">Submit</Button>
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
}

export default OtpValidation