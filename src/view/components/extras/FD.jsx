import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const FD = () => {

  let navigate = useNavigate()
  const handleCancel =()=>{
    navigate('/commonlayout/landingpage')
}
  return (
    <div className='container'>
    <div className="loancontainer pb-2 mx-auto my-5">
        <div className="loanhead p-3 my-2 mx-auto w-100">
         
           <div className='mytitleflex' onClick={()=>handleCancel()}><KeyboardBackspaceIcon /></div>
           <h4 className='text-center text-head mb-5'>FIXED DEPOSITE</h4>
           <div className='inp mx-auto my-2'>   <input type='text' style={{width:'95%',padding:'7px' }} placeholder='Enter Amount' className='col-sm-10' /></div>
           
            <p className='text-center'>Select Your Tenture</p>
        </div>
        
          <Row className='mt-5 justify-content-between'>
            <Col lg={3} md={12} sm={12}>
            <div className='data p-2' >6 Months</div>
            </Col>
            <Col lg={3} md={12} sm={12}>
            <div className='data p-2'>9 Months</div>
            </Col>
            <Col lg={3} md={12} sm={12}>
            <div className='data p-2'>12 Months</div>
            </Col>
          </Row>
          <Row className='mt-5 justify-content-between '>
            <Col lg={3} md={12} sm={12}>
            <div className='data p-2'>24 Months</div>
            </Col>
            <Col lg={3} md={12} sm={12}>
            <div className='data p-2'>36 Months</div>
            </Col>
            <Col lg={3} md={12} sm={12} >
            <div className='data p-2'>48 Months</div>
            </Col>
          </Row>
         
    </div>
  </div>
  )
}

export default FD