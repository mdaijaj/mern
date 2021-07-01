const mongoose=require('../database/db');
const Schema = mongoose.Schema

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
    
}, {
    timestamps: true
});   


// userSchema.pre("save", async (next)=>{
//     console.log("Hi i am pre password using...")
//     if(this.isModified('password')){
//         console.log("Hi i am pre password using...")
//         this.password= await bcrypt.hash(this.password, 12)
//         this.confirm_password= await bcrypt.hash(this.confirm_password,12);
//     }
//     next();
// })

const User=mongoose.model('User', userSchema)
module.exports= User;
