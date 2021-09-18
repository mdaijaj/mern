import React, {useState, useContext} from 'react';
import image from '../images/kingkhan.jpg'
import {useHistory, NavLink} from 'react-router-dom'
import { userContext } from '../App';

const Login=()=>{

    const {state, dispatch} = useContext(userContext);
    const history=useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    // console.log("aijaj", email, password)

    const userLogin= async(e)=>{
        e.preventDefault();
    
        const res=await fetch('/login', {
            method: "post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })

        const data= await res.json();
        console.log("data", data)
        if(data.status===400|| !data){
            window.alert("data not found")
            console.log("data not found")
        }else{
            dispatch({type: "USER", payload: true})
            window.alert("Login data successfully!")
            console.log("login success")
            history.push("/home")
        }
    }

    return (
        <>
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">

                    <div class="signin-image">
                        <figure><img src={image} alt="sing up image" height="300px" width="250px" /></figure>
                        <a href="/signup" class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Login</h2>
                        <form method="POST" class="register-form" id="login-form">

                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="your_email" id="email" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Your Name"  />
                            </div>

                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="your_pass" 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="Password" />
                            </div>

                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>

                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" 
                                    onClick={userLogin}
                                    value="Log in" />
                            </div>
                        </form>
                    
                        <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Login;