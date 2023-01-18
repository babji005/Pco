import React, { Component } from "react";
// import axios from "axios";
import axios from "axios"
import EmployeeServices from "./Services/EmployeeServices";

export default class MainPage extends React.Component{

  constructor(props) {
    super(props);
    this.state={ }
  }
  handleInputChange=(e)=>{
    this.setState({
       [e.target.name]:e.target.value
    })
    
}


  handleSubmit=(e)=>{
    e.preventDefault()
    
    console.log(this.state)
    axios.post("http://localhost:3001/api/v1/newemployee", this.state)
    .then((response) =>{
      console.log(response.data);
      alert("employee details added succesfully")
      e.target.reset()
    })
    .catch(function (error) {
      console.log(error.response);
    });
    

  }

  render() {
    return(
      
        <div className="container">
           <form style={{marginBottom:10 , marginLeft:50, color:"red"}} onSubmit={this.handleSubmit}>
         
           Emp id : <input placeholder="enter emp id" name= "eID" style={{marginBottom:10 , marginLeft:90}} onChange={this.handleInputChange}>
            </input><br/>
           Emp Name : <input placeholder="enter emp Name" name="empName" style={{marginBottom:10 , marginLeft:43}} onChange={this.handleInputChange}>
            </input><br/>
           Emp Salary : <input placeholder="enter emp Salary" name="empSal" style={{marginBottom:10 , marginLeft:40}} onChange={this.handleInputChange}>
            </input><br/>
           Current Project :<input placeholder="enter emp current prjct" name="projName" style={{marginBottom:10 , marginLeft:10}} 
           onChange={this.handleInputChange}>
            </input><br/>
           Emp Location : <input placeholder="enter emp location" name="location" style={{marginBottom:10 , marginLeft:20}} 
           onChange={this.handleInputChange}>
            </input><br/>

           <button type="Submit" className="btn btn-primary" >Add Employee</button>
           </form>
      </div>
    )
  }
   
}