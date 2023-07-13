import React, { useEffect, useState } from 'react'
import './myprofile.css'
import {getbyIDcust} from '../../../service/CustomerService'
import {authservice} from '../../../service/AuthService'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EditIcon from '@mui/icons-material/Edit';
const Myprofile = () => {
    let navigate = useNavigate()
    const [customerdata, setCustomerdata] = useState([])
    useEffect(() => {
      getCustomerData()
    }, [])
      const email=authservice.getCurrentUser()
     const getCustomerData =()=>{
      getbyIDcust(email.email).then((res)=>{
         setCustomerdata(res.data.result)
      })
     }
     const handleEdit = ()=>{
        navigate('/commonlayout/editprofile',{state:customerdata})
     }
     const handleCancel =()=>{
        navigate('/commonlayout/landingpage')
    }
    
    const imgUrl=`http://localhost:8080/${customerdata.addressoridproof}`
    console.log(imgUrl)
  return (
    <div>
        <div className="myprofile container p-0 ">
            <div className='mytitle'>
                <div className='d-flex justify-content-between mx-2 py-1'>
                    <div className='mytitleflex' onClick={()=>handleCancel()}><KeyboardBackspaceIcon /></div>
                    <div onClick={()=>handleEdit()} className='mytitleflex'><EditIcon /> EDIT</div>
                </div>
            <h2 className=" text-center py-4 text-head">MY PROFILE</h2>
            <div className=" text-center m-0">
                <AccountCircleIcon className='profile-icon'/>
            </div>
            </div>
       
        <div className="details  mx-auto w-100 my-4">
            <div className='personal-deatails container my-3'>
                <h5 className='text-center'>PERSONAL INFO</h5>
                    <h6 className=''>{customerdata.customername}</h6>
                    <p className='mt-1' >Name</p>
                    <h6 className=''>{customerdata.dob}</h6>
                    <p className='mt-1' >Date of Birth</p>
                    <h6 className=''>{customerdata.nationality}</h6>
                    <p className='mt-1' >Nationality</p>
                    <h6 className=''>{customerdata.address},{customerdata.city}<br />
                    {customerdata.state},{customerdata.pincode}
                    </h6>
                    <p className='mt-1' >Address</p>
            </div>
            <div className='personal-deatails container my-3'>
            <h5 className='text-center'>CONTACT DETAILS</h5>
                    <h6 className=''>{customerdata.email}</h6>
                    <p className='mt-1' >Email Id</p>
                    <h6 className=''>{customerdata.phoneno}</h6>
                    <p className='mt-1' >Phone No</p>
            </div>
            <div className='personal-deatails container my-3'>
            <h5 className='text-center'>ADDRESS OR ID PROOF</h5>
            <img src={imgUrl} className='img-fluid  w-60' alt='idproof'/>
            </div>
            {/* 
                <Col lg={6} md={12} sm={10} className='h-50'>
                   
                </Col>
            </Row> */}
        </div>
        </div>
    </div>
  )
}

export default Myprofile