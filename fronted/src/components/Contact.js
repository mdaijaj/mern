// import { ConnectionStates } from 'mongoose';
import React, {useState, useEffect, useImperativeHandle} from 'react';

const Contact=()=>{

    const [userData, setUserData] = useState({name: "", email:"", phone: "", message: ""});

    const callAboutPage= async ()=>{
        try{
            const res= await fetch('/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" ,
                }
            });
            
            const data= await res.json();
            console.log("data...", data);
            setUserData({...data, name: data.name, email: data.email, message: data.message});

            
            if(!data.status==200){
                console.log("invalid status.......")
                const error=new Error(res.error);
            }
        }
        catch(err){
            console.log(err.message)
            // history.push('/login')
        }
    }

    useEffect(()=>{
        callAboutPage();
    }, []);

    const handleInput=(e)=>{
        const name= e.target.name
        const value= e.target.value

        setUserData({... userData, [name]: value })
        // setUserData({... userData, name: userData.name, email: userData.email, phone: userData.phone, message: userData.message })

    }

    const contactForm= async(e)=>{
        e.preventDefault();

        const {name, email, phone, message}= userData;
        const res= await fetch('/contact', {
            method: "post", 
            headers: {
                "Contact-Type": "application/json",
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });
        const data=await res.json();
        if(!data){
            console.log("message not sent")
        }else{
            alert("message sent success")
            setUserData({...userData,  message: ""})
        }
    }




    return (
    <>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="contact_info_item d-flex flex-lg-row flex-column justify-content-between align-items-between md-5">

                            <div className="contact_info_item d-flex flex-row align-item-centre justify-content-start">
                                <div className="contact_info_image"> 
                                    <img src="" alt=""/>
                                </div>
                                <div className="contact_info_content">
                                    <div className="contact_info_title"> Phone </div>
                                    <div className="contact_info_text">+ 91 8826616653</div>
                                </div>
                            </div>

                            <div className="contact_info_item d-flex flex-row align-item-centre justify-content-start">
                                <div className="contact_info_image"> 
                                    <img src="" alt=""/>
                                </div>
                                <div className="contact_info_content">
                                    <div className="contact_info_title"> Email </div>
                                    <div className="contact_info_text">aijaj535@gmail.com</div>
                                </div>
                            </div>

                            <div className="contact_info_item d-flex flex-row align-item-centre justify-content-start">
                                <div className="contact_info_image"> 
                                    <img src="" alt=""/>
                                </div>
                                <div className="contact_info_content">
                                    <div className="contact_info_title"> Address </div>
                                    <div className="contact_info_text">New Delhi India</div>
                                </div>
                            </div>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>



        {/* contact form */}
        <div className="contact-form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form_info_content py-5">
                            <div className="contact_form_title"> Get in Touch </div>
                            <form method="POST" id="contact_form">
                                <div className="contact_form_inputs d-flex flex-md-row flex-column">
                                    <input type="text" id="contact_form_name"
                                        className="contact_form_name_input_field"
                                        name="name"
                                        value={userData.name} 
                                        onChange={handleInput}
                                        placeholder="Your name" required
                                    />
                                        
                                    <input type="email" id="contact_form_name"
                                        className="contact_form_name_input_field"
                                        name="email"
                                        value={userData.email} required
                                        onChange={handleInput}
                                        placeholder="Your Email"
                                    />
                                        
                                    <input type="number" id="contact_form_name"
                                        className="contact_form_name_input_field"
                                        name="phone"
                                        value={userData.phone} 
                                        onChange={handleInput}
                                        placeholder="Your Phone" required
                                    />
                                        
                                </div>          

                                <div className="contact_form_text mt-5">
                                    <textarea className="text_field contact_form_message"
                                        name="message"
                                        value={userData.message}
                                        onChange={handleInput}
                                        placeholder="Your Message" cols="90" row="20"></textarea>
                                </div>          

                                <div className="contact_form_button">
                                    <button type="submit" onClick={contactForm} className="button contact_submit_button">Sent Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Contact;