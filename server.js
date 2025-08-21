require('dotenv').config();
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDb')
//config dot env file
dotenv.config();

//database call
connectDb();
//rest objects

const app = express()

//middliwares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors()) 

//routes
app.get('/',(req,res) => {
    res.send('<h1>Hello from server </h1>')
})

//port

require("dotenv").config();





const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

