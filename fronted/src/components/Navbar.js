import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom';
import "../App.css"  //22
import { userContext } from '../App';

const Navbar=()=>{
    const {state, dispatch} = useContext(userContext);
    console.log("AIJAJKHAN", state)
    const RenderMenu= ()=>{
        if(state){
            console.log("state........", state)
            return(
                <>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/home">Home <span className="sr-only"></span></NavLink></li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/contact"> Contact <span className="sr-only"></span></NavLink>
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