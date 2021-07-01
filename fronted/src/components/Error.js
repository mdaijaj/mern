import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage=()=>{
    return (
        <div id="notfound">
            <div id="notfound">
                <div id="notfound-404">
                    <h1>404</h1>
                </div>
            </div>
            <h1>we are sorry page, page not found!</h1>
            <NavLink to="/" > Back to Home Page </NavLink>
        </div>
    )
}

export default Errorpage;