import React, { Component } from "react";
import axios from "axios";
import Modal from "./Modal";
import EmpdetailsPage from "./EmpdetailsPage";

export default class Employee extends React.Component{
    constructor(props) {
        super(props);
        this.state={
           employee:1,
           details:[],
           isOpen:false,

        }
    
        // this.saveDetails = this.saveDetails.bind(this);
      }
      componentDidMount() {
        axios.get("http://localhost:3001/api/v1/employees/"+this.state.employee)
        .then(response=>{
            console.log("=====EmploTable 111111111Component mounted=======");
            this.setState({details:response.data})
            console.log(this.state.details.empId)
            // setemployee([response.data])
            
            //  this.setState({employees:response.data});
            
         })
    }
    
     handleSubmit=(e)=>{
        e.preventDefault()
         console.log(e.target.empid.value)
         this.setState({employee:e.target.empid.value})
         
         axios.get("http://localhost:3001/api/v1/employees/"+e.target.empid.value)
        .then(response=>{
            console.log("=====EmploTable 111111111Component mounted=======");
            this.setState({details:response.data , isOpen:true})
            console.log(this.state.details.empId)
            // setemployee([response.data])
            
            //  this.setState({employees:response.data});
            
         })
     }
     goback=(e)=>{
        e.preventDefault()
        this.setState({ isOpen:false})
     }

    render(){
        //  let modalData = this.state.details.empId;
        return(
            <div>
                {!this.state.isOpen &&
                 <form onSubmit={this.handleSubmit}>
                    <input placeholder="enter emp id" name="empid" style={{color:"red"}}></input>
                    <button type="submit"  className="btn btn-primary">GEt details</button>
                 </form>
                 
                }
               <h1 style={{color:"black"}}>{this.state.details.empID}</h1> 
               
               {/* <p style={{color:"black"}}> */}
                {this.state.isOpen && <div>
                    {/* <EmpdetailsPage/> */}
                     <p style={{color:"black"}}>
                    <div class="card card w-100  text-left" style={{ maxWidth: 3541}}>
  <div class="card-header" style={{maxWidth: 541}}>
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Employee details</a>
      </li>
          
    </ul>
  </div>
  <div class="card-body">
    <p class="card-title">EMP ID : {this.state.details.empId}</p>
    <p class="card-text">EMP Name : {this.state.details.empName}</p>
    <p class="card-text">EMP Salary : {this.state.details.empSal}</p>
    {/* <p class="card-title">EMP ID : {this.state.details.empId}</p>
    <p class="card-text">EMP Name : {this.state.details.empName}</p>
    <p class="card-text">EMP Salary : {this.state.details.empSal}</p> */}
    <button onClick={this.goback} className="btn btn-success">Go Back</button>
    {/* <a href="#" class="btn btn-primary"> EMP SAlary : {this.state.details.empSal}</a> */}
  </div>
  
</div>
            {this.state.details.empId}
            {this.state.details.empName}
            {this.state.details.empSal}
            </p>
            </div>
                }
            {/* </p> */}

            {/* <Modal msg={modalData}  /> */}
             </div>
            // </div>
        )
    }
}