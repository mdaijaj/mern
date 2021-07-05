import React, {useEffect, useState} from 'react'
import image from '../images/login.jpg'
import {useHistory} from 'react-router-dom'

const About=()=>{
    const history= useHistory();
    const [userData, setUserData] = useState(' ');

    const callAboutPage= async ()=>{
        try{
            const res= await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json" ,
                },
                credentials: "include" 
            });
            
            const data= await res.json();
            console.log("data...", data);
            setUserData(data);

            
            if(!data.status==200){
                console.log("invalid status.......")
                const error=new Error(res.error);
            }
        }
        catch(err){
            console.log(err.message)
            history.push('/login')
        }
    }

    useEffect(()=>{
        callAboutPage();
    }, []);


    return (
        <>
        <div className="container">
            <form method="GET">
                <div className="row">
                    <div className="col-md-4">
                        <div className="image-profile">
                            <img  src={image} alt="image not found"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="profile-head">
                            <h4>{userData.name}</h4>
                            <h5>{userData.professional}</h5>
                            <p className="profile-rating mt-3 mb-5">Rankings <span>1/10</span> </p>
                            
                            
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About </a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"></input>
                    </div>
                </div>


                <div className="row">
                    {/* left side url */}
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>Work LIne</p>
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_aijaj">Adil Khan</a><br/>
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_aijaj">Elon Musk</a><br/>
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_aijaj">Thapa</a><br/>
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_aijaj">King khan</a><br/>
                            <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27" target="_aijaj">Bada Bussiness</a><br/>
                        </div>
                    </div> 



                    {/* right side panel */}

                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <div className="row">
                                    <div className="col-md-6">
                                        <label >UserId</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userData._id}</p>   
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label >Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userData.name}</p>   
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-md-6">
                                        <label >Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userData.email}</p>   
                                    </div>
                                </div>
                                
                                </div> <div className="row">
                                    <div className="col-md-6">
                                        <label >Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userData.phone}</p>   
                                    </div>
                                </div>

                                </div> <div className="row">
                                    <div className="col-md-6">
                                        <label >Professional</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userData.professional}</p>   
                                    </div>
                                </div>
                            </div>
                       
                        
                            <div className="tab-panel fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label >Experience</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Expert</p>   
                                    </div>
                                </div>
                            
                                <div className="row ">
                                    <div className="col-md-6">
                                        <label >Hourly Rate</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>10$/hr</p>   
                                    </div>
                                </div> 

                                <div className="row">
                                    <div className="col-md-6">
                                        <label >Total Project</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>100</p>   
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label >Language Know</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>English and Hindi</p>   
                                    </div>
                                </div>

                            </div>
                        </div>
            </form>
        </div>
        </>
    )
}

export default About;