import "./App.css";
import Navbar from "./Navbar";
import TextFrom from "./TextFrom";
import About from "./About";
import React, { useState } from "react";
import Alert from "./Alert";
// import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {


  const [mode, setMode] = useState ('light');
  const [alert, setAlert] = useState (null);
 
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);

    },1500)

  } 

// can be use to show notifications in the title
  // document.title = 'TextUtils'


  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
  }

 const toggleMode = (cls)=>{
   removeBodyClasses();
  console.log(cls);
  document.body.classList.add('bg-'+cls)
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#001028'
      showAlert("Dark mode is enable","success")
    } else {
      setMode('light') 
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enable","success")
    }
  }

  // const mystyle={
  //   // backgroundImage:'linear-gradient(to right, #430089, #82ffa1)',
  //   backgroundColor:'#001028'
  // }
 


  return (
    <>
    <Router>
      <Navbar title="NewTitle" aboutText="About" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
            <div className="container my-4" >
            <Routes>
              <Route exact path="/about"
                element={<About mode={mode} />}> 
                </Route>            
              <Route exact path="/"  element=  {<TextFrom heading="Try TextUtils - Word counter, Text analyser, Upercase to lowercase, " showAlert={showAlert}  mode={mode}/>}> </Route>
            </Routes>
           </div>
   </Router>
    </>
  );
}

export default App;
