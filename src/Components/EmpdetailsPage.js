import { useEffect, useState } from "react";
import axios from "axios"

export default function EmpdetailsPage(){
    const [employee, setemployee] = useState([])
    // const [maths, setmaths] = useState()
    // const items = Object.values(employee[0]).map((key) => employee[0][key]);
    // console.log(items,employee[0])
    // const details =Object.values(employee[0]);

    useEffect(() => { 
        console.log("Mounted"); 
        axios.get("http://localhost:3001/api/v1/employees/2")
        .then(response=>{
            console.log("=====EmploTable 111111111Component mounted=======");
            setemployee([response.data])
            
            //  this.setState({employees:response.data});
             console.log(response.data, employee[0])
             const details= (response.data)
             console.log(details.empId)
             setemployee(details)
             console.log(employee.empId)
         })
    },[]);


    return(
        <div>
            <h1 className="text-align-top ">
                Here you can see the details of your Employee  
            </h1>
            <hr/>
            <p>
            {employee.empId}
            {employee.empName}
            {employee.empSal}
                
            <div class="card mb-3" style={{maxWidth: 440}}>
  <div class="row no-gutters">
    <div class="col-md-1">
      <img src="https://th.bing.com/th/id/R.8014731bbd5a6b57fa772fccb8653038?rik=%2fp%2bNCzs5UuBaug&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f01%2fbuilding-wallpaper.jpeg&ehk=Y6e8DJu5l31WDk1f5XrN%2biuqOrXdC%2fZvh7MMWsbzOc0%3d&risl=&pid=ImgRaw&r=0" alt="..." style={{maxWidth:1480}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{employee.empName}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">{employee.empName}</small></p>
      </div>
    </div>
  </div>
</div>

{/* <div class="card mb-3" style={{maxWidth: 840, justifyContent:"right"}}>
  <img src="" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">
        Name: {employee.empName}
    </h5>
    <p class="card-text">EMP ID : {employee.empId} && employee salary is {employee.empSal}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div> */}
                {/* {
            employee.map(e=>{
         return    <li class="" ><card > {e[0].empName} {e[0].empSal}<button type="submit"  className="btn btn-primary"  >delete</button></card></li>
     })  
    } */}
            </p>
        </div>
    )
}