const express = require('express')
const mongoose = require('mongoose')

const {
    createMessage,
    deleteMessage,
    getMessage,
   
} = require ("../Controller/MessageController")

const router = express.Router()




router.post('/add', createMessage)
router.get('/', getMessage)
router.delete('/:id', deleteMessage)


 

module.exports= router
