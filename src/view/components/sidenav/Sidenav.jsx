import React, { useEffect, useState } from 'react'
import './sidenav.css'
import SidenavItem from './SidenavItem'
import { SidenavData } from './SidenavData'
import { authservice } from "../../../service/AuthService";
import { SidenavAdmin } from './SidenavAdmin';
const Sidenav = () => {
  const [role, setRole] = useState([])
  useEffect(() => {
    const user=authservice.getCurrentUser();
 setRole(user.role)
  }, [])
 
  console.log(role)
  return (
    <div className='sidecontainer'>
      {/* */}
   {
    role==="user"? <div>{
      SidenavData.map((item)=>(
          <SidenavItem item={item}/>
      ))} </div> :<div>{
        SidenavAdmin.map((item)=>(
            <SidenavItem item={item}/>
        ))} </div> 
   }
   
    </div>
  )
}

export default Sidenav