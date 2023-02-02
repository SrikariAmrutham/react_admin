import React from "react";
export default function Regapp(){
    return <>
    <div className="container-fluid">

<h2>Vehicle Registration forms</h2>
<br/>
<div className="table-responsive">

<table className="table container" id="Info">
    <tr>
        <th>Applicant Name</th>
        <th>Application form</th>
        
    </tr>
    <tr>
        <td>Name1</td>
        <td><button style={{color:"black",backgroundColor:"white"}}type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
            view details
          </button></td>
        
    </tr>
    <tr>
        <td>Name1</td>
        <td><button style={{color:"black",backgroundColor:"white"}} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
            view details
          </button></td>
        
    </tr>
    <tr>
        <td>Name1</td>
        <td><button style={{color:"black",backgroundColor:"white"}}type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
            view details
          </button></td>
        
    </tr>
    <tr>
        <td>Name1</td>
        <td><button style={{color:"black",backgroundColor:"white"}}type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">
            view details
          </button></td>
        
    </tr>
    
</table>  
</div>
</div>
<div className="modal" id="myModal">
<div className="modal-dialog">
  <div className="modal-content">

    <div className="modal-header">
      <h4 className="modal-title">Form</h4>
      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
    </div>

    <div className="modal-body">
        <table className="table-bordered" id="Info">
            <table className=" table table-striped table-light">
            <tr>
                    <th>Name:</th><td>xxx xxxx</td>
                </tr>
                <tr>
                    <th>Age:</th><td></td>
                </tr>
                <tr>
                    <th>Gender:</th><td></td>
                </tr>
                <tr>
                    <th>Date of birth:</th><td></td>
                </tr>
                <tr>
                    <th>Temp Address:</th><td></td>
                </tr>
                <tr>
                    <th>Prem Address:</th><td></td>
                </tr>
                <tr>
                    <th>Address of the dealer:</th><td></td>
                </tr>
                <tr>
                    <th>Vehicle className:</th><td></td>
                </tr>
                <tr>
                    <th>Mth.Yr.of Mfg:</th><td></td>
                </tr>
                <tr>
                    <th>Engine number:</th><td></td>
                </tr>
                
            </table>
        </table>
    </div>
    <br/>
    
    <div style={{width: "auto",justifyContent: "center",display: "flex"}} className="row">
      <input style={{width: "100px",marginRight: "5px"}} type="approve" className="btn btn-success" value="Approve"/>
      <input style={{width: "100px"}} type="reject" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal" value="Reject"/>
    </div>

    <div className="modal-footer">
      <button type="button" className="btn btn-danger " data-bs-dismiss="modal">Close</button>
    </div>

  </div>
</div>
</div>
    </>
}