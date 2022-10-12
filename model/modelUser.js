const mongoose = require('mongoose');

const newContact = new mongoose.Schema({
name:{
    type:String, 
    required:true
},
email:{
    type:String, 
    required:true
},
password:{
    type:String, 
    required:true
}
})

module.exports = Contact = mongoose.model("User", newContact)