const express = require('express')
const mongoose = require('mongoose')

const {
    createForm,
    deleteForm,
    getFormData,
   
} = require ("../Controller/FormController")

const router = express.Router()




router.post('/add', createForm)
router.get('/', getFormData)
router.delete('/:id', deleteForm)


 

module.exports= router
