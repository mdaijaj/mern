const jwt= require('jsonwebtoken');
const User= require('../models/index');

const authenticate= async(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1];
        // console.log(token)
        if (token == null) return res.sendStatus(401)
        const verifyToken=await jwt.verify(token, "aijajkhan");
        console.log("verifyToken,", verifyToken)
        const userRouter= await User.findOne({_id: verifyToken.user_detail._id, 'token': token})
        if(!userRouter){ throw new Error("User not found.")}
        req.userRouter= userRouter._id;
        next();
    }catch(err){
        console.log(err.message)
        res.status(401).send("Unauthorized: no token provide")
    }
}

module.exports={
    authenticate
}