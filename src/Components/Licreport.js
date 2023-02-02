import React from "react";
import { Link } from "react-router-dom";
export default function Licreport(){
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
    <div className="tab-content">
    <div id="approved" className="tab-pane active"><br/>
      <br/>
      <h3>Approved Applications</h3>
      <br/>
      <div className="table-responsive">

      <table className="table" id="Info">
        <tr>
            <th>S.No</th>
            <th>NAME</th>
            <th>LICENSE NUMBER</th>
            <th>APPROVED DATE</th>
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
    <div id="rejected" className="tab-pane fade "><br/>
      <br/>
      <h3>Rejected Applications</h3>
      <br/>
      <div className="table-responsive">

        <table className="table" id="Info">
          <tr>
              <th>S.No</th>
              <th>NAME</th>
              <th>APPLICATION FORM</th>
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
    <div id="pending" className="tab-pane fade"><br/>
      <br/>
      <h3>Pending Applications</h3>
      <br/>
      <div className="table-responsive">

        <table className="table" id="Info">
          <tr>
            <th>S.No</th>
            <th>NAME</th>
            <th>APPLICATION FORM</th>
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