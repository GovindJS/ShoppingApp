const express = require("express")
const mongoose = require("mongoose");
const config = require("../backend/config")
const cors = require('cors')
const products = require('../backend/routes/product-routes').router;
const user = require('../backend/routes/user-routes').router;
const home = require('../backend/routes/home-routes').router;
const passport = require('passport');
const session = require('express-session');
const path = require('path')
require("../backend/authentication/passport-strat");


const app = express();

app.use(express.static(path.join(__dirname,"../frontend")))
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    next();
})

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());


app.use('/home',home)
app.use('/user',user)
app.use('/product',products)
app.get('/',(req,res)=>{res.send("hello")})



function startServer(URL,PORT){
    conncetDB(URL).then(startListen(PORT));
}

function startListen(PORT){
    app.listen(PORT, err => console.error(err));
    console.log("Server running")
}
function conncetDB(URL){
    mongoose.connection.on('error', err => console.log(err))
    mongoose.connection.once('open',()=>console.log("successfully connected to DB"))
    return mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true } );
}


startServer(config.DB_URL,config.PORT);



