const express=require('express');
const connectDb = require('./configuration/dbConfig');
const dotenv=require('dotenv').config()
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const app=express();
connectDb()
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})
app.use(cors())
app.use(express.json())
app.use('/api/hostel/',require('../Hostel_backend/routes/HostelRegisterRouter'))
app.use(errorHandler)