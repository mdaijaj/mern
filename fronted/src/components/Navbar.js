import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';
import userLogin from './Login'
import "../App.css"  //22
const Navbar=()=>{

    console.log("userLogin", userLogin())
    const toggle="true";
    var accessTokenObj = localStorage.getItem("Token:")    
    console.log("dataStore", accessTokenObj)
    const RenderMenu= ()=>{
        if(toggle){
            
            return(
                <>
                
                {/* <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} /> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home <span className="sr-only"></span></NavLink></li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/contact"> Contact <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup"> Register</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/login"> Login <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/logout"> Logout <span className="sr-only"></span></NavLink>
                    </li>
                </ul>
                </>
            )
        }
        else{
            return(
                <> 
                
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home <span className="sr-only"></span></NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup"> Register</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/login"> Login <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/contact"> Contact <span className="sr-only"></span></NavLink>
                        </li>
                </ul>
                </>
            )
        }
    }
    
  return(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <RenderMenu/>
            </div>
        </nav>
    </>
  )
}

export default Navbar;