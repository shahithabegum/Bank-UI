import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Col, Row } from 'react-bootstrap';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const ApplyLoan = () => {
  let navigate = useNavigate()
  const handleCancel =()=>{
    navigate('/commonlayout/landingpage')
}
  return (
    <div className='container'>
      <div className="loancontainer pb-2 mx-auto">
          <div className="loanhead p-3 my-2 mx-auto">
          <div className='mytitleflex' onClick={()=>handleCancel()}><KeyboardBackspaceIcon /></div>
              <h3 className='text-center'>“It’s easy to get a loan unless you need it.” </h3>
              <h1 className='text-center'><CurrencyRupeeIcon /> 500000</h1>
              <p className='text-center'>Maximum amount</p>
          </div>
          <div className="loan p-3 my-2 mx-auto">
              <h3 className='text-muted'>Recommended Loan</h3>
              <div className="loanwrapper my-2">
              <Row >
                <Col lg={12} md={10} sm={10}>
                  <div className="frist d-flex my-2">
                    <div className='mx-2 '><RecentActorsIcon style={{fontSize:'40px',color:'blueviolet'}}/></div>
                    <div className='mx-2'>
                    <h5 className='m-0'>Policy Loan</h5>
                    <p className='m-0'>Lowest interest as low as 0.2%</p>
                    </div>
                    
                  </div>
                  </Col>
                  <Col lg={12} md={10} sm={10}>
                  <div className="frist d-flex justify-content-between mx-3 my-2">
                    <div className=''>
                    <h5  className='m-0'><CurrencyRupeeIcon />200000</h5>
                    <p  className='m-0'>maximum amount</p>
                    </div>
                    <div className=''>
                    <h5  className='m-0'>0.2%</h5>
                    <p  className='m-0'>interest</p>
                    </div >
                    <div ><button className='btn btn-primary '>Enquire Now</button></div>
                    
                  </div>
                </Col>
              </Row>
              </div>
              <div className="loanwrapper my-2">
              <Row >
                <Col lg={12} md={10} sm={10}>
                  <div className="frist d-flex my-2">
                    <div className='mx-2 '><SchoolIcon style={{fontSize:'40px',color:'green'}}/></div>
                    <div className='mx-2'>
                    <h5 className='m-0'>Post Graduation Loan</h5>
                    <p className='m-0'>Lowest interest as low as 0.3%</p>
                    </div>
                    
                  </div>
                  </Col>
                  <Col lg={12} md={10} sm={10}>
                  <div className="frist d-flex justify-content-between mx-3 my-2">
                    <div className=''>
                    <h5  className='m-0'><CurrencyRupeeIcon />250000</h5>
                    <p  className='m-0'>maximum amount</p>
                    </div>
                    <div className=''>
                    <h5  className='m-0'>0.3%</h5>
                    <p  className='m-0'>interest</p>
                    </div >
                    <div ><button className='btn btn-primary '>Enquire Now</button></div>
                    
                  </div>
                </Col>
              </Row>
              </div>
              <div className="loanwrapper my-2 ">
              <Row >
                <Col lg={12} md={10} sm={10}>
                  <div className="frist d-flex my-2">
                    <div className='mx-2 '><PersonIcon style={{fontSize:'40px',color:'orange'}}/></div>
                    <div className='mx-2'>
                    <h5 className='m-0'>Personal Loan</h5>
                    <p className='m-0'>Lowest interest as low as 0.5%</p>
                    </div>
                    
                  </div>
                  </Col>
                  <Col lg={12} md={10} sm={10}>
                  <div className="frist d-flex justify-content-between mx-3 my-2">
                    <div className=''>
                    <h5  className='m-0'><CurrencyRupeeIcon />300000</h5>
                    <p  className='m-0'>maximum amount</p>
                    </div>
                    <div className=''>
                    <h5  className='m-0'>0.5%</h5>
                    <p  className='m-0'>interest</p>
                    </div >
                    <div ><button className='btn btn-primary '>Enquire Now</button></div>
                    
                  </div>
                </Col>
              </Row>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ApplyLoan