const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Form = new Schema(
    {
   
        Name: {
            type: String,
            required: true,
        },
        

        Address: {
            type: String,
            required: true,
        },

        PhoneNo: {
            type: String,
            required: true,
        },

        BankName: {
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

      NOK: {
        type: String,
        required: true,
    },

     Marital: {
        type: String,
        required: true,
    },

   
   
 },

{ timestamps: true }

);
module.exports = mongoose.model('Form', Form);