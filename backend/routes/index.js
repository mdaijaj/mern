const express=require('express')
const users= require('../controllers/index')
const {authenticate}=require('../middleware/authentication')
const router=express()


//routes
router.post('/signup', users.signup)
router.post('/login', users.login)
router.post('/feedback', users.feedback)
router.get('/contactData', authenticate, users.contactData)
router.post('/contact', authenticate, users.contact)
router.get('/home', authenticate, users.home)
router.get('/about', authenticate, users.about)
router.get('/logout', users.logout)

 
module.exports={
    router
}; 