import React from 'react'
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { change_Password } from "../../../service/UserAuth";
import {SmallInput} from "../../../shared/SmallInput"
import Passwordvalidation from './PasswordValidation';
const Changepassword = () => {
    let navigate = useNavigate()
    const formik =useFormik({
        initialValues:{
            oldpassword:'',
            email:'',
            password:'',
            confirmpassword:''
        },
        validationSchema:Passwordvalidation,
        onSubmit:values=>{
          console.log(values)
          handleSubmit(values)
         

      }
    })
    const handleCancel =()=>{
        navigate('/commonlayout/landingpage')
    }
    const handleSubmit =(values)=>{
        change_Password(values).then(response=>{

          console.log(response.data)
          if(response.data.isSuccess==="true"){
            navigate('/commonlayout/landingpage')
            toast.success(response.data.message)
          }
          else{
            toast.error(response.data.message)
          }
        })
      }
      const enable=formik.values.password===formik.values.confirmpassword
  return (
    <div className='container m-0 p-0'>
        
       <form onSubmit={formik.handleSubmit} className='m-auto my-5 py-5' id='formik-from'>
       <h2 className="text-center h2title">Change password</h2>
         
         <Row className='my-3 mx-1'>
            <Col m={6} sm={12} lg={12} mx-2 my-1>
            <SmallInput 
            name="email"
            id="email"
            lable="Email :"
            span="*"
            placeholder="Enter Email"
            isTouched={formik.touched.email}
            error={formik.errors.email}
            {...formik.getFieldProps("email")}
            />
            </Col>
         </Row>
         <Row className='my-3 mx-1'>
            <Col m={6} sm={12} lg={12} mx-2 my-1>
            <SmallInput 
            name="oldpassword"
            id="oldpassword"
            lable="Old Password :"
            span="*"
            placeholder="Enter Old Password "
            isTouched={formik.touched.oldpassword}
            error={formik.errors.oldpassword}
            {...formik.getFieldProps("oldpassword")}
            />
            </Col>
         </Row>
         <Row className='my-3 mx-1'>
            <Col m={6} sm={12} lg={12} mx-2 my-1>
            <SmallInput 
            name="password"
            id="password"
            type="password"
            lable="New password :"
            span="*"
            placeholder="Enter New Password"
            isTouched={formik.touched.password}
            error={formik.errors.password}
            {...formik.getFieldProps("password")}
            />
            </Col>
         </Row>
         <Row className='my-3 mx-1'>
            <Col m={12} sm={12} lg={12} mx-2 my-1>
            <SmallInput 
            name="confirmpassword"
            id="confirmpassword"
            type="password"
            lable="Confirm Password :"
            span="*"
            placeholder="Enter Confirm Password"
            isTouched={formik.touched.confirmpassword}
            error={formik.errors.confirmpassword}
            {...formik.getFieldProps("confirmpassword")}
            />
            </Col>
         </Row>
         <Row className=" mx-2 my-1 justify-content-center" >
                <Col lg={2} md={6} sm={12}>
                <button className="btn btn-outline-info w-100   my-2" type="submit" disabled={! enable}>Submit</button>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <button className="btn btn-outline-danger w-100 my-2" type="button" onClick={()=>handleCancel()}>Cancel</button>
               
                </Col>
              </Row>
       </form>
    </div>
  )
}

export default Changepassword