const AEC301Routes = require("./NAAS-3-Backend/Routes/AEC301Routes")
const AEC303Routes = require("./NAAS-3-Backend/Routes/AEC303Routes")
const ANS301Routes = require("./NAAS-3-Backend/Routes/ANS301Routes")
const AXD301Routes = require("./NAAS-3-Backend/Routes/AXD301Routes")
const CPP301Routes = require("./NAAS-3-Backend/Routes/CPP301Routes")
const CPP303Routes = require("./NAAS-3-Backend/Routes/CPP303Routes")
const SLM301Routes = require("./NAAS-3-Backend/Routes/SLM301Routes")
const commentRoutes = require("./NAAS-3-Backend/Routes/commentRoutes")






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

 
app.use("/api/aec301", AEC301Routes)
app.use("/api/aec303", AEC303Routes)
app.use("/api/ans301", ANS301Routes)
app.use("/api/axd301", AXD301Routes)
app.use("/api/cpp301", CPP301Routes)
app.use("/api/cpp303", CPP303Routes)
app.use("/api/slm301", SLM301Routes)
app.use("/api/comment", commentRoutes)





connectDB().then(()=> {
   app.listen(PORT, ()=> {
      console.log(`listening on port ${PORT}`)
   })
});