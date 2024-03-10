const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Message = new Schema(
    {
        Message: {
            type: String,
            required: true,
        },
 },

{ timestamps: true }

);
module.exports = mongoose.model('Message', Message);