const Bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User= require('../models/index');


const signup= async (req,res)=>{
    try{
        console.log("api is working...........")
        const {
            name,
            email,
            phone,
            professional
        }= req.body;
        const password= Bcrypt.hashSync(req.body.password, 10)
        const obj = new User({
            name,
            email,
            phone,
            professional,
            password: password,
        });
        if(!name || !email || !phone || !professional || !password){
            console.log("please fill all fields");
            res.status(422).send({status:"please fill all fields" })
        }
        const result=await obj.save();
        if(result){
            console.log("user insert successfully!")
            res.send({message:"user insert success", data: result})
        }
    }
    catch(err){
        console.log(err.message);
        res.send("This mail already exists please login.............");
    }
}


const login=async (req,res)=>{
    try{
        const mail= await User.findOne({email: req.body.email}).exec()
        if(mail){
            if(Bcrypt.compareSync(req.body.password, mail.password)){
                console.log("encrypted password match success!")
                var token =await jwt.sign({ user_detail: mail }, "aijajkhan", {expiresIn: 86400 }); // expires in 24 hours
                // var token= jwt.sign({mail})
                console.log(token)
                res.cookie('token', token, {
                    expiresIn: '300000', 
                    httpOnly: true
                });
                res.send({
                    token: token,
                    user_detail: mail
                })
            }
        }else{
            console.log("Email is not found")
            res.status(401).send("Email is not found.......")
        }
    }
    catch(err){
        console.log(err.message)
        res.send(err.message)
    } 
}

const feedback= async(req,res)=>{
    try{
        const obj = new Feedback(req.body);
        const result=await obj.save();
        console.log("feedback insert successfully!")
        res.send("feedback sent successfully!")
    }
    catch(err){
        console.log(err.message)
        res.send(err.message)
    }
}


// const about=(req,res)=>{
//     console.log("hello about page")
//     res.send(req.root)
// }


module.exports={
    signup,
    login,
    feedback,
    // about
}





