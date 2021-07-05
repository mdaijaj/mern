import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import image from '../images/signupImg.jpg';



const Signup=()=>{

    const history= useHistory();
    const [user, setUser]= useState({
        name:"", 
        email:"", 
        phone:"", 
        professional:"", 
        password:"", 
        confirm_password:""
    });

    let name, value;
    const handleInputs=(e)=>{
        name= e.target.name
        value= e.target.value
        console.log("user", user)
        setUser({...user, [name]: value})
    }

    const Postdata= async(e)=>{
        e.preventDefault();

        const {name, email, phone, professional, password, confirm_password}= user;
        const res= await fetch('/signup', {
            method: "Post",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "X-Requested-With",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, email, phone, professional, password, confirm_password
            })
        })
        console.log("res", res)
        // const data= await res.json();
        console.log("data", res)
        if(res.status===400 || !res){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else{
            window.alert("Registration is successfully!")
            console.log("Registration is successfully")
            history.push('/login')
        }
    }       
    

    return (
        <>
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">

                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" 
                                    value={user.name}
                                    onChange= {handleInputs}
                                    placeholder="Your Name" required="true" />
                            </div>
                            
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" 
                                    value={user.email}
                                    onChange= {handleInputs}
                                    placeholder="Your Email" required="true" />
                            </div>

                            <div className="form-group">
                                <label for="number"><i className="zmdi zmdi-phone"></i></label>
                                <input type="number" name="phone" id="phone" 
                                    value={user.phone}
                                    onChange= {handleInputs}
                                    placeholder="Your Phone" required="true" />
                            </div>

                            <div className="form-group">
                                <label for="prof"><i className="zmdi zmdi-email"></i></label>
                                <input type="text" name="professional" id="professional" 
                                    value={user.professional}
                                    onChange= {handleInputs}
                                    placeholder="Your professional" required="true" />
                            </div>

                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" 
                                    value={user.password}
                                    onChange= {handleInputs}
                                    placeholder="Password" required="true" />
                            </div>

                            <div className="form-group">
                                <label for="password"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="confirm_password" id="confirm_password" 
                                    value={user.confirm_password}
                                    onChange= {handleInputs}
                                    placeholder="confirm password" required="true" />
                            </div>

                            <div className="form-group">
                                {/* <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" /> */}
                                <label for="agree-term" className="label-agree-term">I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit"
                                    onClick={Postdata} value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={image} alt="sing up image" /></figure>
                        <a href="/login" className="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Signup;

