import React from 'react'
import { Button, Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { reset_password } from "../../../service/UserAuth";
import { useNavigate ,useSearchParams} from "react-router-dom";
import {toast} from 'react-toastify'

const Resetpassword = () => {
  let navigate = useNavigate()
  let [searchParams,setSearchParams] = useSearchParams();
  const token=searchParams.get('token')
    const formik = useFormik({
        initialValues: {
          password: "",
          token:token
        },
       
        onSubmit:values=>{
          console.log(values)
          handleSubmit(values)
          
    
      }
      });
      const handleSubmit =(values)=>{
        reset_password(values).then(res=>{
          console.log(res.data)
          if(res.data.isSuccess==="true"){
            navigate('/')
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
                  <h1 className="text-center">Reset Password</h1>
                  <Row className='mt-4'>
                    <Col lg={12} md={12} sm={12}>
                      <label for="password" class="form-label">
                       New Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                       name='password'
                        placeholder="Enter your New Password"
                        {...formik.getFieldProps("password")}
                      />
                    </Col>
                  </Row>
                  <Row className="align-item-center mt-4">
                    <Col lg={12} md={12} sm={12} p={0} className="mt-3 d-flex">
                      <Button className="btn  btn-primary btn-btn-block " type='submit'>Reset</Button>
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

export default Resetpassword