const passport = require('passport')
const mongoose  = require('mongoose')
const User = mongoose.model(require('../models/user-model').NAME)
const LocalStartegy = require('passport-local').Strategy

const fields = {
    usernameField:'loginid',
    passwordField:'password'
}

passport.use(new LocalStartegy(fields,(loginid,password,done)=>{
    User.findOne({loginid : loginid}).exec().then(
        (data)=>{

            if(data && password === data.password){
                return done(null,data);
            }
            else{
                return done(null,false);
            }

        })
}))

passport.serializeUser((data,done)=>{
    done(null,data.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).exec().then((data)=>{
        done(null,data);
    })
})