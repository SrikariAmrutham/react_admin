import React from "react";
import Drop from "./Drop";
import {Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
export default function approved(){
    return <>
    <br/><br/>
    <div className="container-fluid">

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
              <Link to="#approved" class="nav-link active" data-bs-toggle="tab">Approved Applications</Link>
            </li>
            <li class="nav-item">
              <Link to="#rejected" class="nav-link" data-bs-toggle="tab">Rejected Applications</Link>
            </li>
            <li class="nav-item">
                <Link to="#pending" class="nav-link" data-bs-toggle="tab">Pending Applications</Link>
            </li>
          </div>

        </ul>
    </div>
    <div class="tab-content">
    <div id="approved" class="tab-pane active"><br/>
      <br/>
      <h3>Approved Applications</h3>
      <br/>
      <div class="table-responsive">

      <table class="table" id="Info">
        <tr>
            <th>S.No</th>
            <th>OWNER NAME</th>
            <th>REGISTRATION NUMBER</th>
            <th>REGISTRATION DATE</th>
            <th>CONTACT</th>
            <th>ADDRESS</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
    </table>  
  </div>
  
    </div>
    <div id="rejected" class="tab-pane fade "><br/>
      <br/>
      <h3>Rejected Applications</h3>
      <br/>
      <div class="table-responsive">

        <table class="table" id="Info">
          <tr>
              <th>S.No</th>
              <th>NAME</th>
              <th>REGISTRATION FORM</th>
              <th>CONTACT</th>
          </tr>
          <tr>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      </table>  
    </div>
    </div>
    <div id="pending" class="tab-pane fade"><br/>
      <br/>
      <h3>Pending Applications</h3>
      <br/>
      <div class="table-responsive">

        <table class="table" id="Info">
          <tr>
            <th>S.No</th>
            <th>NAME</th>
            <th>REGISTRATION FORM</th>
            <th>CONTACT</th>
        </tr>
        <tr>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>  
    </div>
    </div>
    <br/>
  </div>
  </div>
    </>
}
