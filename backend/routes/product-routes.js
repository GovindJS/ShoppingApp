const { Router } = require('express');
const express = require ('express');
const router = express.Router();
const products = require("../controllers/product-controller")

router.get('/',(req,res)=>{
    products.findall().then(data => res.json(data));
})

router.get('/:id',(req,res)=>{
    products.find(req.params.id).then(data => res.json(data));
})
 
router.post('/',(req,res) =>{
    products.addpdt(req.body).then(data => res.json(data));
    
})

router.put('/:id',(req,res) => {
    products.update(req.params.id,req.body,{new : false}).then(data => res.json(data))
})

module.exports = {router};