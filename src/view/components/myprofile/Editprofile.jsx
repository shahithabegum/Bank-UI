import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import {  Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import {toast} from 'react-toastify';
import {updateCustomer,upload} from '../../../service/CustomerService'
import {Input} from "../../../shared/Input"
import { object } from 'yup';
const Editprofile = () => {
   
    let location=useLocation();
    let navigate = useNavigate()
    const [addressoridproof,setAddressoridproof]=useState(location.state.addressoridproof)
    const formik =useFormik({
       
        initialValues:{
            customername:location.state.customername,
            dob:location.state.dob,
            email:location.state.email,
            phoneno:location.state.phoneno,
            nationality:location.state.nationality,
            address:location.state.address,
            city:location.state.city,
            addressoridproof:'',
            state:location.state.state,
            pincode:location.state.pincode
        },
        onSubmit:values=>{
            console.log(values)
            handleSubmit()
        }
    })
   const  handleformdata = (e)=>{
    let file=e.target.files[0]
    let formdata= new FormData()
    formdata.append("img",file)
    upload(formdata).then(res=>{
        console.log(res.data.result,"res")
        let path=res.data.result.path
         setAddressoridproof(path)

        if(res.data.isSuccess==="true"){
          
            toast.success(res.data.message)
           
        }
    })
    
   }
   console.log(addressoridproof)
  
    const handleCancel =()=>{
        navigate('/commonlayout/landingpage')
    }
    const handleSubmit =()=>{
      const data=Object.assign(formik.values,{addressoridproof:addressoridproof})
        updateCustomer(data).then(response=>{
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
    <div className='container m-auto'>
        
       <form onSubmit={formik.handleSubmit} className='m-auto my-5  editcust' >
       <h2 className="text-center h2title">EDIT PROFILE</h2>
         <Row className='my-3 mx-1'>
            <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
            name="customername"
            id="customername"
            lable="Customer Name :"
            span="*"
            placeholder="Enter Customer Name "
            isTouched={formik.touched.customername}
            error={formik.errors.customername}
            {...formik.getFieldProps("customername")}
            />
            </Col>
            <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
            name="address"
            id="address"
            lable=" Address :"
            span="*"
            placeholder="Enter Address"
            isTouched={formik.touched.address}
            error={formik.errors.address}
            {...formik.getFieldProps("address")}
            />
            </Col>
         </Row>
         <Row className='my-3 mx-1'>
         <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
            name="dob"
            id="dob"
            lable="Date Of Dirth :"
            span="*"
            placeholder="01/01/2000"
            isTouched={formik.touched.dob}
            error={formik.errors.dob}
            {...formik.getFieldProps("dob")}
            />
            </Col>
            <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
            name="city"
            id="city"
            lable="City :"
            span="*"
            placeholder="Enter City"
            isTouched={formik.touched.city}
            error={formik.errors.city}
            {...formik.getFieldProps("city")}
            />
            </Col>
           
         </Row>
         <Row className='my-3 mx-1'>
         <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
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
         
            <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
            name="state"
            id="state"
            lable="State :"
            span="*"
            placeholder="Enter State"
            isTouched={formik.touched.state}
            error={formik.errors.state}
            {...formik.getFieldProps("state")}
            />
            </Col>
         </Row>
         <Row className='my-3 mx-1'>
         <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
            name="phoneno"
            id="phoneno"
            lable="Phone No :"
            span="*"
            placeholder="Enter Phone Number"
            isTouched={formik.touched.phoneno}
            error={formik.errors.phoneno}
            {...formik.getFieldProps("phoneno")}
            />
            </Col>
            <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
            name="pincode"
            id="pincode"
            lable="Pincode :"
            span="*"
            placeholder="Enter Pincode"
            isTouched={formik.touched.pincode}
            error={formik.errors.pincode}
            {...formik.getFieldProps("pincode")}
            />
            </Col>
            
         </Row>
         <Row className='my-3 mx-1'>
         <Col m={12} sm={12} lg={6} mx-2 my-1>
            <Input 
            className='form-control'
            name="nationality"
            id="nationality"
            lable="Nationality :"
            span="*"
            placeholder="Enter Nationality"
            isTouched={formik.touched.nationality}
            error={formik.errors.nationality}
            {...formik.getFieldProps("nationality")}
            />
            </Col>

            <Col m={12} sm={12} lg={6} mx-2 my-1>
              <label className='mx-2'>Address Or Id Proof :</label>
              <input className='mx-2 my-3 form-control  col-lg-12' name="img" type='file'  onChange={(e)=>handleformdata(e)}/>
            </Col>
         </Row>
         <Row className=" mx-2 my-1 justify-content-center" >
         <Col lg={2} md={6} sm={8} ml={0} >
                <button className="btn btn-outline-info w-100  my-2" type="submit">Update</button>
                </Col>
                <Col lg={2} md={6} sm={8} ml={0} >
                <button className="btn btn-outline-danger w-100  my-2" type="submit" onClick={()=>handleCancel()}>Cancel</button>
               
                </Col>
              </Row>
       </form>
    </div>
  )
}

export default Editprofile