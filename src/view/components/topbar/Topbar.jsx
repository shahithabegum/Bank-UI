import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { authservice } from "../../../service/AuthService";
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MenuIcon from '@mui/icons-material/Menu';
const Topbar = () => {
  let navigate = useNavigate()
  const handleLogout = ()=>{
    authservice.handleLogout(navigate)
  }
  const user=authservice.getCurrentUser();

  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top p-0">
        <div className="container-fluid d-flex p-0 m-0">
          <AccountBalanceIcon className="my-2  d-none d-sm-inline tobar-icon mx-3" />
          <Link className="navbar-brand mx-1 p-0" to="/landingpage">
            INFY BANK
          </Link>
          <button
            className="navbar-toggler p-0 b-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mx-3"><MenuIcon  style={{color:'navy'}}/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle mx-3"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {user.username}
          </span>
          <ul className="dropdown-menu mx-3" aria-labelledby="navbarScrollingDropdown">
            <li className="dropdown-item" onClick={()=>{handleLogout()}}>Logout</li>
            <li className="dropdown-item">Change Password</li>
          </ul>
        </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
