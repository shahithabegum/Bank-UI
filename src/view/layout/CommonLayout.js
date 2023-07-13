import React from 'react'
import { Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/topbar/Topbar'
import './CommonLayout.css'
import { authservice } from '../../service/AuthService'
import { useNavigate } from "react-router-dom";
import Sidenav from '../components/sidenav/Sidenav'
const CommonLayout = () => {
  let navigate = useNavigate()
  if(!authservice.isAuthenticated){
    navigate('/login')
  }
  return (
    <div>
        <Topbar/>
        <div className='main'>
        <div className='side'>
           <Sidenav />
        </div>
        <div className='others'>
           <Row>
            
              <Outlet />
           </Row>
        </div>
        </div>
    </div>
  )
}

export default CommonLayout