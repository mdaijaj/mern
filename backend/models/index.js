const mongoose=require('../database/db');
const Schema = mongoose.Schema
const Bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

let userSchema=  new Schema({
    name: {
       type: String,
       required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    professional: {
        type: String,
        require: true
    },
    password: {
     type: String,
     required: true
    },
    confirm_password: {
        type: String,
    },
    messages: [
        {
             name: {
                type: String,
                required: true,
             },
             email: {
                 type: String,
                 required: true,
                 unique: true
             },
             phone: {
                 type: String,
                 required: true
             },
             message: {
                type: String,
                required: true
             }
        }
    ],
    tokens: [
        {
            token:{
                type: String,
                required: true
            } 
        }
    ]}, {
    timestamps: true
});   

//hashing password
userSchema.pre("save", async function (){
    console.log("Hi i am pre password using...")
    if(this.isModified('password')){
        console.log("password modified...")
        this.password= await Bcrypt.hash(this.password, 12)
        this.confirm_password= await Bcrypt.hash(this.confirm_password,12);
    }
})

userSchema.methods.generateAuthToken= async function(){
    try{
        let token=jwt.sign({_id: this._id}, "aijajkhan");
        this.tokens= this.tokens.concat({token: token});
        console.log("token", token)
        await this.save();
        return token;
    }
    catch(err){
        console.log("not token verify", err.message)
    }
}

userSchema.methods.addMessage= async function (name, email, phone, message){
    try{
        this.messages=this.messages.concat(name, email, phone, message)
        await this.save();
        return this.messages
        // return res.status(201).send({message: "user message success!"})

    }
    catch(err){
        console.log(err.message)
    }
}





const User=mongoose.model('User', userSchema);
module.exports= User;
