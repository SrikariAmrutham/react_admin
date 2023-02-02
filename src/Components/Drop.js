import React from "react";
import { Link } from "react-router-dom";
function Drop(){
    return <>
    <form action="">
        <label>From:
          <input type="date" name="from" style={{margin: "5px "}}/>
        </label>
        <label>To:
            <input type="date" name="to" style={{margin: "5px "}} />
          </label>
          <br/>
          <div style={{width:"auto",margin:"7px 0px 0px 0px",display: "flex"}} class="row">
            <input style={{width: "80px"}} type="submit" value="Submit"/>
          </div>
        </form>
    <br/>
    <hr/>
      <div class="dropdown">
  
        <ul class="nav dropdown-toggle btn dropbtn " role="tablist">Applications       

          <div class="dropdown-content">
            <li class="nav-active">
              <Link to="approved" class="nav-link active" data-bs-toggle="tab">Approved Applications</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#rejected">Rejected Applications</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#pending">Pending Applications</a>
            </li>
          </div>

        </ul>
    </div>
    </>
}
export default Drop