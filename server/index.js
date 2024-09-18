const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/user')
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Details")
app.post('/Register',(request,response)=>{
        const { name, email, password } = request.body;
        userModel.findOne({ name: name })
            .then(user => {
                if (user) {
                    response.status(400).json("Username already exists");
                } else {
                    userModel.create({ name, email, password })
                        .then(newUser => response.json(newUser))
                        .catch(err => response.status(500).json(err));
                }
            })
            .catch(err => response.status(500).json(err));
    });
app.post('/Login',(request,response)=>{
    const{name,password}=request.body
    userModel.findOne({name:name})
    .then(user=>{
        if(user)
        {
            if(user.password===password)
            {
                response.json("success")
            }
            else
            {
                response.json("The password is incorrect")
            }
        }
        else
        {
            response.json("No Record Found")
        }
    })
})
app.listen(3001,()=>{
    console.log("Server is running")
})