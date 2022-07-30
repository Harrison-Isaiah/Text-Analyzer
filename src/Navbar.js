import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
   <div className="container-fluid">
    <Link className="navbar-brand"  to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active   " aria-current="page"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/about">{props.aboutText}</Link>
        </li> 
      
       
      </ul>

    <div className={`form-check form-switch me-auto text-${props.mode==='light'?'dark':'light'}`}>
      {/* <div className="bg-primary mx-2 rounded " onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer', right:'2px'}} >      </div>
      <div className="bg-success mx-2 rounded " onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer', right:'2px'}} >      </div>
      <div className="bg-danger mx-2 rounded " onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer', right:'2px'}} >      </div>
      <div className="bg-warning mx-2 rounded " onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer', right:'2px'}} >      </div> */}
      
      <input className="form-check-input" onClick={()=>{props.toggleMode(null)}}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
    </div>
    

    </div>
  </div>
</nav>
    </div>
  )
}

