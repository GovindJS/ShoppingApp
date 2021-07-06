const express = require ('express');
const router = express.Router();
const path = require("path")



router.get('/',checkAuth,(req,res)=>{
    res.sendFile(path.join(__dirname,"../../frontend/views/home.html"))
})

function checkAuth(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/user/login')
}

module.exports = {router};