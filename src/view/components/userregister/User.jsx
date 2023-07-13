import React from 'react'
import {  Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import './user.css'
import { register } from "../../../service/UserAuth";
import {SmallInput} from "../../../shared/SmallInput"
import UserValidation from "./UserValidation";
const User = () => {
    let navigate = useNavigate()
    const formik =useFormik({
        initialValues:{
            username:'',
            email:'',
            role:'',
            phoneno:''
        },
        validationSchema:UserValidation,
        onSubmit:values=>{
          console.log(values)
          handleSubmit(values)
      }
    })
    const handleCancel =()=>{
        navigate('/commonlayout/landingpage')
    }
    const handleSubmit =(values)=>{
        register(values).then(response=>{
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
  return (
    <div className='container m-0 p-0'>
        
       <form onSubmit={formik.handleSubmit} className='mx-auto my-5 py-5' id='formik-from'>
       <h2 className="text-center h2title">User Registration</h2>
         <Row className='my-3 mx-1'>
            <Col m={6} sm={12} lg={12} mx-2 my-1>
            <SmallInput 
            name="username"
            id="username"
            lable="UserName :"
            span="*"
            placeholder="Enter UserName "
            isTouched={formik.touched.username}
            error={formik.errors.username}
            {...formik.getFieldProps("username")}
            />
            </Col>
         </Row>
         <Row className='my-3 mx-1'>
            <Col m={6} sm={12} lg={12} mx-2 my-1>
            <SmallInput 
            name="email"
            id="email"
            lable="Email :"
            span="*"
            placeholder="Enter email"
            isTouched={formik.touched.email}
            error={formik.errors.email}
            {...formik.getFieldProps("email")}
            />
            </Col>
         </Row>
         <Row className='my-3 mx-1'>
            <Col m={6} sm={12} lg={12} mx-2 my-1>
            <SmallInput 
            name="phoneno"
            id="phoneno"
            lable="Phone No :"
            span="*"
            placeholder="Enter Phone No"
            isTouched={formik.touched.phoneno}
            error={formik.errors.phoneno}
            {...formik.getFieldProps("phoneno")}
            />
            </Col>
         </Row>
         <Row className='my-3 mx-1'>
            <Col m={6} sm={12} lg={12} mx-2 my-1>
            <SmallInput 
            name="role"
            id="role"
            lable="Role :"
            span="*"
            placeholder="Enter Role"
            isTouched={formik.touched.role}
            error={formik.errors.role}
            {...formik.getFieldProps("role")}
            />
            </Col>
         </Row>
         <Row className=" mx-2 my-1 justify-content-center" >
                <Col lg={2} md={6} sm={12} ml={0} >
                <button className="btn btn-outline-info w-100  my-2" type="submit">Submit</button>
                </Col>
                <Col lg={2} md={6} sm={12} ml={0} >
                <button className="btn btn-outline-danger w-100  my-2" type="button" onClick={()=>handleCancel()}>Cancel</button>
               
                </Col>
          </Row>
       </form>
    </div>
  )
}

export default User