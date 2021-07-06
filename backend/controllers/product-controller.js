const mongoose  = require('mongoose');
const pdtModelName = require('../models/product-model').NAME

const pdt = mongoose.model(pdtModelName);

function addpdt(obj,idinuser){
    let newpdt = new pdt({
        name : obj.name,
        manufacturer : obj.manufacturer,
        imageurl : obj.imageurl,
        price : obj.price,
        idinuser : idinuser
    });
    return newpdt.save();
}
function findall(){ 
    return pdt.find().exec();
}
function find(id){
    return pdt.findById(id).exec();
}
function update(id,newobj){
    return pdt.findOneAndUpdate(id,newobj,{new:false}).exec();
}
function remove(id){
    console.log(id)
    return pdt.findOneAndDelete({idinuser : id}).exec();
}

module.exports = {addpdt,findall,find,update,remove};

