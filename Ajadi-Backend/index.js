const FormRoutes = require("./Ajadi-Backend/Routes/FormRoute")
const MessageRoutes = require("./Ajadi-Backend/Routes/MessageRoute")




const express = require("express")
require("dotenv").config()
const mongoose = require('mongoose')
const bp = require('body-parser')
const cors =require("cors") 

const app = express()

app.use(bp.json({limit:'10mb'}))
app.use(bp.urlencoded({ extended: true, limit :'10mb' }))

app.use(cors());
 const PORT= 4000
app.use((req,res, next) => {
   console.log(req.path , req.body ,req.method , res.body, req.file)
   next()
})





mongoose.set('strictQuery', false);
const connectDB = async ()=> {
   try{
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Mongodb connected :${conn.connection.host}`);

   } catch (error){
      console.log(error);
      process.exit(1);
   }
}

 
app.use("/api/form", FormRoutes)
app.use("/api/msg", MessageRoutes)





connectDB().then(()=> {
   app.listen(PORT, ()=> {
      console.log(`listening on port ${PORT}`)
   })
});