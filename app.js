const express = require('express')
const fs= require('fs')
const path = require('path')
const mongoose = require('mongoose')
const User = require('./models/user') // import the User model from models.
const userRouter = require('./routes/user') // import the /user route handlers from routes.

const app = express()

app.listen(3000)

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(userRouter) // This will mount the routes in userRouter into app


const url = "YOUR_URL_HERE"
mongoose.connect(url,(err)=>{
    if(err)
        console.log("Error connecting to DB..")
    else
        console.log("Successfully connected to DB..")
})


app.get('/',(req,res)=>{
    
   res.send("Hello Express!")
    
})

