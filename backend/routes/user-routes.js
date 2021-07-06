const express = require ('express');
const router = express.Router();
const user = require("../controllers/user-controller")
const products = require("../controllers/product-controller")
const passport = require('passport')
const path = require('path')

//POST methods
router.post('/register',(req,res)=>{
    console.log("done here")
    
    user.adduser(
        {name : req.body.name,loginid : req.body.loginid,password : req.body.password}
        ).then(() => res.send("done")).catch((err)=> res.send("User already exists"));
    })

router.post('/login',passport.authenticate('local'),(req,res,next)=>{res.redirect('/home')});

router.post('/addpdtcart:id',(req,res)=>{
    products.find(req.params.id).then((data)=>{
        user.addPdtToCart(req.user.loginid,data).then((data)=>{
            res.redirect("/home")
        })
    })
})

router.post('/addpdt',(req,res)=>{ 
    user.addPdt(req.user.loginid,req.body).then((data)=>{
        console.log(data);
        products.addpdt(req.body,data.products[data.products.length - 1]._id).then((data)=>{
        res.send(data);
    })});
    
})

router.post('/editpdt:id',(req,res)=>{
    user.updatePdt(req.user.loginid,req.params.id,req.body).catch((err)=>console.error(err))
    products.update(req.params.id,req.body).then(data => res.json(data))
})

router.post('/removepdtcart:id',(req,res)=>{
    user.removeFromCart(req.user.loginid,req.params.id).then((data)=>{
        res.redirect("/user/showcart")
    })

})

router.post('/removepdt:id',(req,res)=>{
    products.remove(req.params.id).then(data => console.log(data))
    user.removePdt(req.user.loginid,req.params.id).then((data)=>{
        res.redirect("/home")
    })
   
})




// GET methods
router.get('/register',(req,res,next)=>{
    res.sendFile(path.join(__dirname ,"../../frontend/views/register.html"))
})
router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../frontend/views/login.html"))
})

router.get('/products',(req,res)=>{
    user.getProducts(req.user.loginid).then((data)=> res.send(data.products));
})

router.get('/showcart',(req,res,next)=>{
    res.sendFile(path.join(__dirname ,"../../frontend/views/cart.html"))
})

router.get('/addpdtform',(req,res,next)=>{
    res.sendFile(path.join(__dirname ,"../../frontend/views/addproduct.html"))
})

router.get('/cart',(req,res)=>{
    console.log(req.user.loginid)
    user.getCart(req.user.loginid).then((data) => res.send(data.cart));
})




module.exports = {router}