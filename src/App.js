import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';

import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";

import SyncLoader from "react-spinners/SyncLoader";

function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
        
      <div className="loader"> 
        <SyncLoader
          color={'#9067C6'}
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
  
   
     

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
      </Routes>
      
     
      </div>
      )}  
    </>
  );
}

export default App;
