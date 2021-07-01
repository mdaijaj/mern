
const express=require('express')
const users= require('../controllers/index')
const authenticate=require('../middleware/authentication')
const router=express()


//routes
router.post('/signup', users.signup)
router.post('/login', users.login)
// router.get('/about', users.about, middleware.authenticate)

router.get('/about', authenticate.authenticate, (req,res)=>{
    console.log("about page open")
    // res.send(authenticate)
})

// router.get('/all_data', category.all_data)
// router.get('/single_data', category.single_data)
// router.put('/update', category.update)
// router.delete('/delete', category.deleted)
router.post('/feedback', users.feedback )

module.exports={
    router
};