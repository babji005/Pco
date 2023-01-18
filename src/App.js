import logo from './logo.svg';
import './App.css';
import MainPage from "./Components/MainPage";
import { BrowserRouter as Router, HashRouter,Switch, Route, Link, Routes } from 'react-router-dom';
// import EmpdetailsPage from './Components/EmpdetailsPage';
// import Header from './Components/Header';
import Employee from './Components/Employee';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header/>
        {/* <Employee/>
       <MainPage/> */}
      <switch>
        <Route exact path='/' component={Employee}></Route>
        <Route exaxt path='/newemployee' component={MainPage}></Route> 
      </switch>
      
      <Footer/>
      </header>
    </div>
    </Router>
  );
}

export default App;
