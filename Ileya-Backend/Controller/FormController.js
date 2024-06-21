const Form = require("../Model/FormModel")
const mongoose = require('mongoose')








// create new lesson
const createForm = async (req, res,next) =>  {
     
    try{

        const lesson = await Form.create(req.body)
        res.status(201).json({
          success: true,
          lesson
        })
      }
      catch (error) {
          console.log(error);
          next(error);
      }
  }



 
 // get all lessons

 const getFormData = async (req,res) => {
   const lesson = await Form.find({}).sort({createdAt:+1})
   res.status(200).json(lesson)
 }



 //delete lesson

 const deleteForm = async (req, res) => {
   const {id} = req.params
   if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: "Not found"})
   }
   
   const lesson = await Form.findOneAndDelete({_id:id})
  if (!lesson) {
   return res.status(400).json({error: "Not found"})
 }
  res.status(200).json(lesson)
 }







module.exports = {
  getFormData,
  deleteForm,
  createForm,  
}



















     

    