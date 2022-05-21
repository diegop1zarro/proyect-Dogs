import './App.css';
import React from "react";
import {Route , Routes} from 'react-router-dom';
import Home from './components/Home/home'
import  Landing  from './components/Landing/landing';
import DogDetails from './components/DogDetails/dogDetails'
import CreateDog from './components/CreateDog/createDog.jsx'
// import NavBar from './components/NavBar/navBar';
// import Search from './components/Search/search';

function App() {
  return (
    <div className="App">
{/* <NavBar onSearch={<Search/>}/> */}

{/* <NavBar/> */}
      <Routes>
<Route  exact path='/' element={<Landing/>}  /> 
<Route  path='/home' element={<Home/>} />
<Route path='/dogs/:id' element={<DogDetails/>} />
<Route path='/dog' element={<CreateDog/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
