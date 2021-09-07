import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {NavLink} from 'react-router-dom';
import "../App.css"  //22

const Navbar=()=>{
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/home">Home <span className="sr-only"></span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/login">Login <span className="sr-only"></span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">Register</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="#">Action</NavLink>
                    <NavLink className="dropdown-item" to="#">Another action</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                    </div>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/contact">Contact <span className="sr-only"></span></NavLink>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar;













/* 
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import {NavLink} from 'react-router-dom';


// const Navbar = () => { *//* //     return (
// <>
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Navbar page</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarText">
//     <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//                 <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/Navbar">Navbar</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/About">About</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/Contact">Contact</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="/Singup">Signup</NavLink>
//             </li>
//             <li className="nav-item">
//                 <NavLink className="nav-link" to="Login">Login</NavLink>
//             </li>
//             <li className="nav-item dropdown">
//                 <NavLink className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</NavLink>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                     <a className="dropdown-item" href="#">Web Developer</a>
//                     <a className="dropdown-item" href="#">App Developer</a>
//                     <a className="dropdown-item" href="#">Software Developer</a>
//                 </div>
//             </li>
//         </ul>
//   </div>
// </nav>
// </>
//     )
// } */

/* // export default Navbar; */