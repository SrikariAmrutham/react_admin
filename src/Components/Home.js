import React from "react";
import { Link } from "react-router-dom";
import pic from "./1484799.png"


function Home()
{
    return(
        <>

        <div className="container-fluid">
         <div className="row">
          <div className="column" >
            <div className="box-item"> 
                  <p className="center-position"> 
                  <h3>Vehicle Registration</h3>
                      <img src={pic} alt="Know your Registration Details"/>
                  </p>              
                <Link to="/Regapp" style={{color:"blue"}}>Click to View Registration Applications</Link>
                <br/>
           </div>
                                          
          </div>
          <div className="column" >
            <div className="box-item"> 
              <p className="center-position">
                <h3>License Applications</h3> 
                <img src={pic} alt="Know your License Details"/>
              </p>
              <Link to="/Licapp" style={{color:"blue"}}>Click to View License Applications</Link>
                   <br/>
              </div>
          </div>
          <div className="column" >
            <div className="box-item"> 
                     <p className="center-position">
                      <h3>Permit Applications</h3> 
                         <img src={pic} alt="Know your Permit Details"/>
                     </p>
                     <Link to="/Perapp" style={{color:"blue"}}>Click to View Permit Applications</Link>
                   <br/>
              </div>
          </div>
          </div>
          <br/>
          </div>
    </>
    );

}
export default Home