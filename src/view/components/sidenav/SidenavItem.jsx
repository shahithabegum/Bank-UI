import React from 'react'
import './sidenav.css'
import { NavLink } from 'react-router-dom'
const SidenavItem = ({item}) => {
    console.log(item.path)

  return (
    <div className='navItem my-3 '>
        <NavLink to={item.path || "#"}  className='nav-link p-2 mt-2 mx-0 d-flex ' activeClassName='active' >
            <span className='icon my-auto mx-3'>{item.icon}</span>
            <div className='title ms-1 d-none d-sm-inline my-auto mx-5'>{item.title}</div>
        </NavLink>
        
    </div>
  )
}

export default SidenavItem