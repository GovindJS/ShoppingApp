const mongoose = require('mongoose');
const user = require('../models/user-model').NAME;
const userModel = mongoose.model(user);
const pdtModelName = require('../models/product-model').NAME
const productModel = mongoose.model(pdtModelName)

function adduser(obj){
    let user = new userModel(obj);
    return user.save()
}

function deletesuer(id){
    return userModel.findByIdAndDelete(id).exec()
}

function authenticateUser(password,id){
    userModel.findOne({ loginid: id }).exec().then((data)=>{
        if(data.password === pasword){
            return [true,null]
        }
        else if( data.password != password){
            return [false,"wrong password"]
        }
        else{
            return [false,"no user"]
        }
    })
}
async function addPdt(id,product){
    let user = await userModel.find({loginid : loginid}).exec();
    user.products.push(product);
    return userModel.findOneAndUpdate({loginid : loginid},user).exec()
}
function getCart(id){
    return userModel.findOne({loginid : id}).exec()
}
function getProducts(id){
    return userModel.findOne({loginid : id}).exec()
}
async function addPdt(loginid, product) {
    let user = await userModel.findOne({ loginid : loginid }).exec();
    user.products.push(product);
    return user.save();
}
async function addPdtToCart(loginid, product) {
    let user = await userModel.findOne({ loginid : loginid }).exec();
    user.cart.push(product);
    return user.save();
}
async function removeFromCart(email, productId) {
    const user = await userModel.findOne({ loginid : email }).exec();
    for(let i = 0; i < user.cart.length; i++) {
        if(user.cart[i]._id == productId) {

            user.cart.splice(i, 1);
            break;
        }
    }
    return user.save();
}
async function removePdt(email, productId) {
    const user = await userModel.findOne({ loginid : email }).exec();
    for(let i = 0; i < user.products.length; i++) {
        if(user.products[i]._id == productId) {
            user.products.splice(i, 1);
            break;
        }
    }
    return user.save();
}
async function updatePdt(loginid,pdtid,newpdt){
    const user = await (await userModel.findOne({loginid:loginid})).exec()
    let newPdt = new productModel(obj);
    for(let i = 0;i<user.products.length;i++){
        if(user.products[i]._id == pdtid){
            user.products[i] = newPdt;
            break;
        }
    }
    return user.save();
}

module.exports = {adduser,deletesuer,authenticateUser,getProducts,addPdtToCart,addPdt,getCart,removeFromCart,updatePdt,removePdt};