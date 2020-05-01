const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Admin = new Schema({
  
    
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    salt:{
        type:String
    },
    profilepic:{
        type:String
    },
    lastlogin:{
        type:String
    },
    gender:{
        type:String
    },
    created_at:{
        type:String
    },
    updated_at:{
        type:String
    }
});
module.exports = mongoose.model('admin', Admin);
// in this 'exsample' - exsample should be collection name