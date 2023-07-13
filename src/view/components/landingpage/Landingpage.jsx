import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import {getbyIDcust} from '../../../service/CustomerService'
import {authservice} from '../../../service/AuthService'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BoltIcon from '@mui/icons-material/Bolt';
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PaymentsIcon from '@mui/icons-material/Payments';
import {getbyIDact} from '../../../service/AccountService'
import './landingpage.css'
const Landingpage = () => {
    const [customerdata, setCustomerdata] = useState([])
    const [accountdata, setAccountdata] = useState([])
  useEffect(() => {
    getCustomerData()
    getaccountData()
  }, [])
    const email=authservice.getCurrentUser()
   const getCustomerData =()=>{
    getbyIDcust(email.email).then((res)=>{
       setCustomerdata(res.data.result)
    })
   }
  
   
     
     const getaccountData =()=>{
        getbyIDact(email.email).then((res)=>{
         setAccountdata(res.data.result)
      })
     }
   console.log(customerdata)
  return (
    <div>
        <Row className='my-3 mx-0 '> 
            <Col lg={6} md={6} sm={12} className='account  my-2'>
                <div className='accountwarrapper  m-auto'>
                   <h3 className='text-center  my-2 text-head'>Saving Account</h3>
                   {/* <h6 className='my-2 pt-3'>Account NUmber</h6> */}
                   <p className='text-center' >{accountdata.accountnumber}</p>
                   {/* <h6>IFSC Code</h6>
                   <p>IFSC0005A</p> */}
                   <h1 className='text-center'><CurrencyRupeeIcon style={{fontSize:"35px"}}/>{accountdata.balance}.00</h1>
                   <div className='d-flex col-12 my-3'>
                    <Link to="/commonlayout/account" className='mx-auto landingpagelink'>show more</Link>
                   </div>
                </div>
            </Col>
            <Col lg={6} md={6} sm={12} className='customer my-2'>
            <div className='accountwarrapper  m-auto'>
                   <h3 className='text-center my-2 text-head'>Personal Details</h3>
                   <p className='text-center'>Name</p>
                   <h1 className='text-center'>{customerdata.customername}</h1>
                   <div className='col-12 my-3 d-flex'>
                    <Link to="/commonlayout/myprofile"  className='mx-auto landingpagelink'>Show More</Link>
                   </div>
                </div>
            </Col>
        </Row>
        <div className='subdiv'>
          <Row className='justify-content-between mx-1 my-3'>
            <Col lg={3} md={2} sm={2} >
            <div className="landing-nav my-2">
              <NavLink to="/commonlayout/transefer" className="justify-content-center landing-navlink">
                <div className='text-center '><AccountBalanceIcon className='landing-icon'/></div>
               
                <div className='text-center '>Amount Transfer</div>
              </NavLink>
            </div>
            </Col>
            <Col lg={3} md={2} sm={2}>
            <div className="landing-nav my-2">
              <NavLink to="/commonlayout/widraw" className="justify-content-center landing-navlink">
               
                <div className='text-center '><AccountBalanceWalletIcon  className='landing-icon'/></div>
                <div className='text-center '>Withdraw Money</div>
              </NavLink>
            </div>
            </Col>
            <Col lg={3} md={2} sm={2}>
            <div className="landing-nav my-2">
              <NavLink to="/commonlayout/deposit" className="justify-content-center landing-navlink">
                <div className='text-center '><CurrencyRupeeIcon className='landing-icon'/></div>
                <div className='text-center '>Deposit</div>
              </NavLink>
            </div>
            </Col>
            
            </Row>
            <Row className='justify-content-between mx-1 my-3'>
            <Col lg={3} md={2} sm={2}>
            <div className="landing-nav my-2">
              <NavLink to="/commonlayout/fd" className="justify-content-center landing-navlink">
                <div className='text-center '><SavingsIcon className='landing-icon'/></div>
                <div className='text-center '>Fixed Deposit</div>
              </NavLink>
            </div>
            </Col>
            <Col lg={3} md={2} sm={2}>
            <div className="landing-nav my-2">
              <NavLink to="/commonlayout/loan" className="justify-content-center landing-navlink">
                <div className='text-center '><BoltIcon className='landing-icon'/></div>
                <div className='text-center '>Apply Loan</div>
              </NavLink>
            </div>
            </Col>
            <Col lg={3} md={2} sm={2}>
            <div className="landing-nav my-2">
              <NavLink to="/commonlayout/creditcard" className="justify-content-center landing-navlink">
                <div className='text-center '><PaymentsIcon className='landing-icon'/></div>
                <div className='text-center '>Credit Card</div>
              </NavLink>
            </div>
            </Col>
            </Row>
        </div>
    </div>
  )
}

export default Landingpage