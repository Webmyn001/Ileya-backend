const Message = require("../Model/MessageModel")
const mongoose = require('mongoose')
const cloudinary = require('../Cloudinary/cloudinary')








// create new message
const createMessage = async (req, res,next) =>  {
     
   const data = new Message({
    Message : req.body.Message,
   })
   data.save().then(data => {
    res.status(201).json(data);
   }).catch(err => {
    res.status(404).send('Unable to post update');
   })
  }



 
 // get all Message

 const getMessage = async (req,res) => {
   const data = await Message.find({}).sort({createdAt:+1})
   res.status(200).json(data)
 }



 //delete lesson

 const deleteMessage = async (req, res) => {
   const {id} = req.params
   if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: "Not found"})
   }
   
   const data = await Message.findOneAndDelete({_id:id})
  if (!data) {
   return res.status(400).json({error: "Not found"})
 }
  res.status(200).json(data)
 }







module.exports = {
  getMessage,
  deleteMessage,
  createMessage,  
}



















     

    