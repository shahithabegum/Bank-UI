import React from 'react'
import { Button, Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { forget_Password } from "../../../service/UserAuth";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

const ForgetPassword = () => {
  let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
          email: ""
        },
       
        onSubmit:values=>{
          console.log(values)
          handleSubmit(values)
         
      }
      });
    
      const handleSubmit =(values)=>{
        forget_Password(values).then(res=>{
          console.log(res.data)
          if(res.data.isSuccess==="true"){
            navigate('/resetpassword')
            toast.success(res.data.message)
          }
          else{
            toast.error(res.data.message)
            console.log("login failed")
          }
        })
      }
      return (
        <div className="login col-sm-12">
          <Row className="d-flex">
            <Col lg={6} className="formcol">
              <div className="formcontainer">
                <form className="form" onSubmit={formik.handleSubmit}>
                  <h1 className="text-center">Forget Password</h1>
                  <Row className='mt-4'>
                    <Col lg={12} md={12} sm={12}>
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="example@gmail.com"
                        {...formik.getFieldProps("email")}
                      />
                    </Col>
                  </Row>
                  <Row className="align-item-center mt-4">
                    <Col lg={12} md={12} sm={12} p={0} className="mt-3 d-flex">
                      <Button className="btn btn-primary btn-btn-block " type="submit">Create Password Reset Link</Button>
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

export default ForgetPassword