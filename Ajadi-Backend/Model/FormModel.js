const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Form = new Schema(
    {
   
        Name: {
            type: String,
            required: true,
        },
        

        School: {
            type: String,
            required: true,
        },

        AcctName: {
            type: String,
            required: true,
        },

        AcctNo: {
            type: String,
            required: true,
        },
        Image: [
            {
        public_id:{
         type: String,
         required: true
         
        },
        url: {
          type:String,
          required:true
         
        }
         
         },
    ], 
    
    bankName: {
        type: String,
        required: true,
    },
    
    ShortNote: {
        type: String,
        required: true,
    },

    Level: {
        type: String,
        required: true,
    },

    WhatsappNo: {
        type: String,
        required: true,
    },

   
   
 },

{ timestamps: true }

);
module.exports = mongoose.model('Form', Form);