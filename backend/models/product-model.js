const NAME = "product"
const mongoose =  require('mongoose')

const ProductSchema = new mongoose.Schema({
    name : {
        type : String,
        // required : true,
    },
    manufacturer : {
        type : String,
        // required : true,
    },
    manufactureddate : {
        type : Date,
        default : Date.now,
    },
    imageurl : {
        type : String,
        // required : true
    },
    price : {
        type : Number
    },
    loginid : {
        type : String
    },
    idinuser:{
        type : String
    }
    
})

mongoose.model(NAME,ProductSchema);
module.exports  = {NAME,ProductSchema};