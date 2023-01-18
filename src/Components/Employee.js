import React, { Component } from "react";
import axios from "axios";
// import Modal from "./Modal";
// import EmpdetailsPage from "./EmpdetailsPage";

export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      isOpen: false,
      empId:0
    };
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({empId: e.target.empid.value})
    console.log(e.target.empid.value);
    if (e.target.empid.value > 4) {
      alert("please select employee id between 1 to 4");
      e.target.reset();
    } 
    else {
      axios
        .get("http://localhost:3001/api/v1/employees/" + e.target.empid.value)
        .then((response) => {
          this.setState({ details: response.data, isOpen: true });
          // console.log(this.state.details.empId);
        });
    }
  };
  goback = (e) => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };
  editdetails = (e)=>{

  }
  deleteEmployee =()=>{
     axios.delete("http://localhost:3001/api/v1/employees/delemp/" + this.state.empId)
     .then((response)=>{
      console.log("deleted successfully")
      alert("yes!! we deleted it for you!!  click okay to go back")
      this.setState({ isOpen: false });
     })
  }

  render() {
    // console.log(this.state.details)
    //  let modalData = this.state.details.empId;
    return (
      <div>
        {!this.state.isOpen && (
          <form onSubmit={this.handleSubmit} style={{marginTop:50 , marginLeft:150}}>
            <h3 style={{color:"olive"}}>Enter the employee ID to get particular details</h3>
            <input
              placeholder="enter emp id"
              name="empid"
              style={{ color: "red",}}
            ></input>
            <button type="submit" className="btn btn-primary" style={{ marginLeft:10}}>
              GEt details
            </button>
          </form>
        )}

        {this.state.isOpen && (
          <div style={{ backgroundColor: "yellow" }}>
            <p style={{ color: "black" }}>
              <div
                className="card card w-100  text-left"
                style={{ backgroundColor: "yellowgreen" }}
              >
                <div className="card-header" style={{ maxWidth: 541 }}>
                    <h1 className="card-head">Employee details</h1>
                </div>
                <div className="card-body">
                  <p className="card-title">EMP ID : {this.state.details.empId}</p>
                  <p className="card-text">
                    EMP Name : {this.state.details.empName}
                  </p>
                  <p className="card-text">
                    EMP Salary : {this.state.details.empSal}
                  </p>
                  <p className="card-text">
                    Project Name : {this.state.details.projName}
                  </p>
                  <p className="card-text">
                    EMP Location : {this.state.details.location}
                  </p>
                  <button onClick={this.goback} className="btn btn-primary">
                    Go Back
                  </button>
                  <button onClick={this.editdetails} className="btn btn-success" style={{marginLeft:10}}>
                    Edit details
                  </button>
                  <button onClick={this.deleteEmployee} className="btn btn-danger" style={{marginLeft:10}}>
                    Delete Him
                  </button>
                </div>
              </div>
            </p>
          </div>
        )}
      </div>
    );
  }
}
