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
        })
        .then((res)=>{
            console.log("res", res)
            dispatch({type: "USER", payload: false});
            console.log("api is working here.")
            history.push('/login', {replace: false});
            if(res.status!==200){
                console.log("err.message")
            }
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