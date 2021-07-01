const express = require('express')
const app = express()
const bodyParser=require('body-parser')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let user=require('./routes/index')
app.use('/', user.router)

app.get('/', (req, res)=>{
    console.log("api is working .........")
    res.send("dk boss")
})

var port =5000;
app.listen(port, ()=>{
    console.log(`server is listening this ${port}`);
});