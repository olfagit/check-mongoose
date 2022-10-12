const mongoose = require("mongoose");

const ConnectDB = async(req,res) =>{
try {
    await mongoose.connect("mongodb+srv://olfa:olfaolfa@cluster0.bycnnd1.mongodb.net/?retryWrites=true&w=majority")
    console.log("DB is connected")
} catch (error) {
    console.log(error)
}
}

module.exports = ConnectDB;