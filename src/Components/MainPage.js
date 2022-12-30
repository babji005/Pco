import { useState , useEffect} from "react"
import { Link } from 'react-router-dom';
import axios from "axios"

export default function MainPage(){
    const [empid , setempid] = useState(0)
    const [Lamount, setamt] = useState(0)
    const [employee, setemployee] = useState([])
    const [emp,setemp] = useState(1)
    // const handleSubmit=(event) =>{
    //     this.props.onSubmit(event);
    //   }

    const handleSubmit = (e) =>{
        e.preventDeault()
        console.log("clicked")
        setemp(e.target.value )
          
          
        console.log(emp)
    }
    
    useEffect(() => { 
        console.log("Mounted"); 
        axios.get("http://localhost:3001/api/v1/employees/"+emp)
        .then(response=>{
            console.log("=====EmploTable 111111111Component mounted=======");
            setemployee([response.data])
            
            //  this.setState({employees:response.data});
             console.log(response.data, employee[0])
             const details= (response.data)
             console.log(details.empId)
             setemp(details.empId)
             setemployee(details)
             console.log(employee.empId,emp)
         })
    },[]);

    const Amtchanged = (e) => {
        setamt(e.target.value)
        // this.setState({ Lamount: e.target.value });
        console.log(Lamount);
      };
    return (
        <div>
            <form class="example" onSubmit={(event) => this.handleSubmit(event)}>
                <input placeholder="Enter emp Id" style={{width:150,height:30}} name="Amt" onChange={Amtchanged}></input>
                {/* <Link to='/newemployee'> */}
                    <button type="submit" className="btn btn-primary" >Get Details</button>
                    {/* </Link> */}
            </form>
            <h1>{Lamount}{emp}</h1>
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
        </div>
    )
}