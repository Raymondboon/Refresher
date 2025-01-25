const express = require('express')
const User = require('../models/user')

const router = express.Router()

//route handler to create a sample user 
router.get('/dummy',(req,res)=>{
    const user1 = new User({name:"John",age:56})
    user1.save((error,result)=>{
        if(error)
            res.send(error)
        else
            res.send(result)
    })
})

//route handler to get all users
router.get('/user',(req,res)=>{
    User.find({},(error,result)=>{
        if(error)
            res.send(error)
        else
            res.send(result)
    })
})


module.exports = router