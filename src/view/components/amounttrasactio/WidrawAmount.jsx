import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentIcon from '@mui/icons-material/Payment';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {  Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import {toast} from 'react-toastify';
import {widraw} from '../../../service/AmountService'
import {authservice} from '../../../service/AuthService'
import {getbyIDact} from '../../../service/AccountService'
import {SmallInput} from "../../../shared/SmallInput"


const WidrawAmount = () => {
    let navigate = useNavigate();
    const [accountdata, setAccountdata] = useState([])
    useEffect(() => {
      getaccountData()
    }, [])
      const email=authservice.getCurrentUser()
      console.log(email.email)
     const getaccountData =()=>{
        getbyIDact(email.email).then((res)=>{
         setAccountdata(res.data.result)
      })
     }
    const formik =useFormik({
      initialValues:{
          amount:''
      },
      onSubmit:values=>{
          console.log(values)
          handleSubmit()
                }
  })
  const handleCancel =()=>{
      navigate('/commonlayout/landingpage')
  }
  const handleSubmit =()=>{
    widraw(accountdata._id,formik.values).then(response=>{
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
    console.log("account",accountdata)
    return (
      <div className="container ">
        <div className=" amountt mx-auto">
          <div className="mytitle w-100  py-1">
            <div className="mytitleflex mx-2" onClick={() => handleCancel()}>
              <KeyboardBackspaceIcon />
            </div>
         
            <h2 className=" text-center py-2 text-head">WITHDRAW AMOUNT</h2>
          
            <div className='text-center p-0'><PaymentIcon className='profile-icon'/></div>
            </div>
        <form onSubmit={formik.handleSubmit} className='mx-auto my-5 py-5' id='formik-from'>
           <Row className='my-3 mx-1'>
              <Col m={6} sm={12} lg={12} mx-2 my-1>
              <SmallInput 
              name="amount"
              id="amount"
              lable="Amount :"
              type='number'
              span="*"
              placeholder="Enter Amount"
              isTouched={formik.touched.amount}
              error={formik.errors.amount}
              {...formik.getFieldProps("amount")}
              />
              </Col>
           </Row>
           <Row className=" mx-2 my-1 justify-content-center" >
                  <Col lg={2} md={6} sm={12} ml={0} >
                  <button className="btn btn-outline-info w-100  my-2" type="submit">Withdraw</button>
                  </Col>
                  <Col lg={2} md={6} sm={12} ml={0} >
                  <button className="btn btn-outline-danger w-100  my-2" type="button" onClick={()=>handleCancel()}>Cancel</button>
                 
                  </Col>
            </Row>
         </form>
         </div>
      </div>
    );
  };

export default WidrawAmount