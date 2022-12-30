import logo from './logo.svg';
import './App.css';
import MainPage from "./Components/MainPage";
import { BrowserRouter as Router, HashRouter,Switch, Route, Link, Routes } from 'react-router-dom';
import EmpdetailsPage from './Components/EmpdetailsPage';
import Header from './Components/Header';
import Employee from './Components/Employee';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Employee/>
       {/* <MainPage/> */}
       {/* <EmpdetailsPage/> */}
       {/* <Header/> */}
       <Switch>
       {/* <Route exact path='/' component={Header}/>
          <Route exact path='/mainpage' component={MainPage}/>
          <Route exact path='/empdetails' component={EmpdetailsPage}/> */}
          {/* <Route exaxt path='/newEmployee' component={Employee}/>     
          <Route exact path='/listproduct' component={listproduct}/>
          <Route exaxt path='/addproduct' component={AddProduct}/>  */}
       </Switch>
       {/* <EmpdetailsPage/> */}
      </header>
    </div>
    </Router>
  );
}

export default App;
