const mongoose = require('mongoose')
const Product = require('../models/product-model').ProductSchema
const NAME = 'UserSchema'

const userschema = new mongoose.Schema({
    name : {
        type : String,
    },
    loginid : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    products : [Product],
    cart : [Product]

})

mongoose.model(NAME,userschema);
module.exports = {NAME};





