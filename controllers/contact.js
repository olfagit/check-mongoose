const user = require("../model/modelUser")
const express = require("express")
const route = express.Router()
const Contact = require('../model/modelUser')

route.post('/adduser', async(req,res)=>{
    const user=req.body
    try {
        const contact = await new Contact(user)
        await contact.save()
        res.status(200).send({"user is added":contact})
    } catch (error) {
      console.log(error)  
    }
})
route.get('/getusers' , async(req,res)=>{
    const user=req.body
    try {
        const contact = await Contact.find()
        res.status(200).send({"List of users":contact})
    } catch (error) {
        console.log(error)
    }
})
route.put('/edituser/:id' , async(req,res)=>{
    const {id} = req.params
    const {name , email , password} = req.body
    try {
       const contact=await Contact.findByIdAndUpdate(id,{$set:{name,email,password}})
       contact.save()
       res.status(200).send({"user updated":contact})
    } catch (error) {
        console.log(error)
    }
})

route.delete('/deleteuser/:id' , async(req,res)=>{
const {id} = req.params
try {
    await Contact.findByIdAndDelete(id)
    res.status(200).send("user is deleted")
} catch (error) {
    console.log(error)
}
})

module.exports = route
