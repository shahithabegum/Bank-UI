import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { SmallInput } from "../../../shared/SmallInput";
import { authservice } from "../../../service/AuthService";
import { getbyIDact } from "../../../service/AccountService";
import axios from 'axios'
import "./extra.css";

const CreditCard = () => {
  let navigate = useNavigate();
  const [carddata, setCarddata] = useState([]);
  const [accountdata, setAccountdata] = useState([])
  const [show, setShow] = useState(false);
  const [pay, setPay] = useState(false);
 
  
  useEffect(() => {
    getaccountData()
  }, [])
    const email=authservice.getCurrentUser()
    console.log(email.email)
    
   const getaccountData =()=>{
    getbyIDact(email.email).then((res)=>{
        setAccountdata(res.data.result._id)
        axios.get(`http://localhost:8080/api/getcard?accountnum=${res.data.result.accountnumber}`).then((res)=>{
            setCarddata(res.data.result)
            
           })
    })
    
   }
 
 
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
   
    onSubmit:values=>{
      console.log(values)
      handleSubmit(values)
    }
  });
  const Swipe =()=>{
    setShow(true)
    setPay(false)
  }
  const payBill =()=>{
    setShow(true)
    setPay(true)
  }
 

 const enable=carddata.totaldue>0
  const handleSubmit = () => {
   if(pay){
    axios.put(`http://localhost:8080/api/paybil/${carddata._id}?_id=${accountdata}`,formik.values).then((res)=>{
        if(res.data.isSuccess==="true"){
            toast.success(res.data.message)
          }
          else{
            toast.error(res.data.message)
          }
    })

   }else{
    axios.put(`http://localhost:8080/api/swipe/${carddata._id}`,formik.values).then((res)=>{
        if(res.data.isSuccess==="true"){
            toast.success(res.data.message)
          }
          else{
            toast.error(res.data.message)
          }
    })
   }
  };
  const handleCancel = () => {
    setShow(false)
    setPay(false)
    navigate("/commonlayout/landingpage");
  };
  return (
    <div>
      <div className="cardmain mx-auto">
        <div className="cardwrapper container mx-auto my-3">
          <div className="card-head d-flex justify-content-between my-3">
            <h6>My Credit Card</h6>
            <h6>INFY Bank</h6>
          </div>
          <div className="carddetails my-3">
            <h6 className="text-center">Platinum</h6>
            <h5 className="text-center">{carddata.cradnum}</h5>
          </div>
          <div className="cardpayments d-flex justify-content-between my-3">
            <p>Due <br /> {carddata.totaldue}</p>
            <p>Validity <br />{new Date(carddata.expridata).getMonth()}/{new Date(carddata.expridata).getFullYear()}</p>
            <p>Limit <br/>{carddata.limits}</p>
          </div>
        </div>
        <div className="cardbtndiv mx-auto">
          <Row className=" mx-2 my-1 justify-content-center">
            <Col lg={6} md={6} sm={12} ml={0}>
              <button
                className="btn btn-outline-primary w-100  my-2 "
                type="button"
                onClick={()=>Swipe()}
              >
                Swipe
              </button>
            </Col>
            <Col lg={6} md={6} sm={12} ml={0}>
              <button
                className="btn btn-outline-primary w-100  my-2 "
                type="button"
                onClick={() => payBill()}
              >
                Pay Bill
              </button>
            </Col>
          </Row>
        </div>
        {show?
        <div className="formdiv">
          <form
            onSubmit={formik.handleSubmit}
            className="mx-auto my-5 py-3"
            id="formik-from"
          >
            { pay ?
            <div>
            <h6 className="text-muted mx-3">Total Due :</h6>
            <h6 className="text-muted mx-3">Minimum Due :</h6> </div> : null}
            <Row className="my-3 mx-1">
              <Col m={6} sm={12} lg={12} mx-2 my-1>
                <SmallInput
                  name="amount"
                  id="amount"
                  lable="Amount :"
                  type="number"
                  span="*"
                  placeholder="Enter Amount"
                  isTouched={formik.touched.amount}
                  error={formik.errors.amount}
                  {...formik.getFieldProps("amount")}
                />
              </Col>
            </Row>
           
            <Row className=" mx-2 my-1 justify-content-center">
            {pay ? null :
              <Col lg={2} md={6} sm={12} ml={0}>
                <button
                  className="btn btn-outline-info w-100  my-2"
                  type="submit"
                >
                  Swipe
                </button>
              </Col>}
              {pay ?  <Col lg={2} md={6} sm={12} ml={0}>
                <button
                  className="btn btn-outline-info w-100  my-2"
                  type="submit"
                  disabled={!enable}
                >
                  Pay
                </button>
              </Col>: null
              }
             
              <Col lg={2} md={6} sm={12} ml={0}>
                <button
                  className="btn btn-outline-danger w-100  my-2"
                  type="button"
                  onClick={() => handleCancel()}
                >
                  Cancel
                </button>
              </Col>
            </Row>
          </form>
        </div>: null}
      </div>
    </div>
  );
};

export default CreditCard;
