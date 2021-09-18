import React, {useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from '../App';


const Logout=()=>{

    const {state, dispatch} = useContext(userContext);
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
            dispatch({type: "USER", payload: false})
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