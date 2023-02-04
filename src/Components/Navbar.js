import React from "react";
import { Link } from "react-router-dom";
import logo from  "./shipment.png"


function Navbar() {
    return(
    <>
    
    <nav className="navbar navbar-expand-lg">
      <brand><img src={logo} style={{height:"40px"}}></img>Road Transport Dept</brand>  
      <button style={{backgroundColor:"white"}} className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTog"
                  aria-controls="navbarTog">
                  <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarTog">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link " aria-current="page" >Home</Link>
            </li>
            <li className="nav-item ">
                  <Link to="Regreport" className="nav-link" >Vehicle Registration Report</Link>
          </li>
          <li className="nav-item">
              <Link to="Licreport" className="nav-link" >License Report</Link>        
          </li>
          <li className="nav-item">
              <Link to="Perreport" className="nav-link" >Permit Report</Link>
          </li>
          <li className="nav-item">
          <Link to="/" className="nav-link" >Logout</Link>
          </li>
          
        </ul>
      </div>
    </nav>
    </>
);
}
export default Navbar
