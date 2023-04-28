const express=require('express')
const mongoose=require('mongoose')
const hostelData= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name should not be empty']
    },
    contact:{
        type:String,
        required:[true,'contact should not be empty']
    },
    email:{
        type:String,
        required:[true,'email should not be empty']
    },
    location:{
        type:String,
        required:[true,'location should not be empty']
    },
    facilities:{
        type:String,
        required:[true,'facilities should not be empty']
    },
},{timestamps:true,})
module.exports=mongoose.model('RegisteredHostels',hostelData)