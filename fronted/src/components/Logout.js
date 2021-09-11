import React, {useEffect } from "react";
import { useHistory } from "react-router-dom";


const Logout=()=>{
    const history= useHistory();

    useEffect(()=>{
        fetch('/logout', {
            method: 'GET',
            headers: {
                Accept: "application/json"
            },
            credentials: "include"
        })
        .then((res)=>{
            console.log("api is working here.")
            history.push('/login')
        })
        .catch((err)=>{
            console.log(err.message)
        })
    })

    return(
        <>
        <h1> User logout from website </h1>
        </>
    )
}

export default Logout;