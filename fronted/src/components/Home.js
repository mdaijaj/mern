import React, { useState, useEffect } from 'react';


const Home= ()=>{

    const [userName, setUsername] = useState(" ");
    const [show, setShow] = useState(false);
    const userHomepage= async()=>{
        try{
            const res= await fetch('/home', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json" ,
                }
            });
            const data= await res.json();
            console.log("data...", data);
            setUsername(data.name)
            setShow(true)
        }
        catch(err){
            console.log(err.message)
            // history.push('/login')
        }
    }
    
        useEffect(()=>{
            userHomepage();
        }, []);
    
    return (
        <div className="home-page">
            <div className="home-div">
                <h6 className="pt-5">Welcome Home Page</h6>
                <h1>{userName}</h1>
                <h2>{ show ? "Happy to See the User Login" : "We are the MERN Develper" }</h2>
            </div>
        </div>
    )
}

export default Home;