const express = require('express')
const cors = require('cors');
const bodyParser=require('body-parser');
const cookieParser= require('cookie-parser')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(__dirname)); 

let user=require('./routes/index')
app.use('/', user.router)

app.get('/', (req, res)=>{
    console.log("api is working .........")
    res.send("dk boss")
})

var port =3000;
app.listen(port, ()=>{
    console.log(`server is listening this ${port}`);
});