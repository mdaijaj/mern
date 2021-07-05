const express=require('express')
const users= require('../controllers/index')
const {authenticate}=require('../middleware/authentication')
const router=express()


//routes
router.post('/signup', users.signup)
router.post('/login', users.login)
router.post('/feedback', users.feedback)
// router.get('/about', users.about, middleware.authenticate)
router.post('/contact', authenticate, users.contact)
router.get('/home', authenticate, users.home)
router.get('/about', authenticate, (req,res)=>{
    console.log("about page open");
    res.send(req.userRouter);
})


 
module.exports={
    router
};