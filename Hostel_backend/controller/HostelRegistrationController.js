const hostelData=require('../model/HostelRegisterModel')

const getallhostels=async(req,res)=>{
 
    const data=await hostelData.find()
  
    await res.status(200).json(data)
}

const createHostel =async(req,res)=>{
     const{name,contact,email,location,facilities}=req.body
     if(!name || !contact || !email || !location || !facilities){
        res.status(400)
        throw new Error('all fileds are mandatory')
     }
   const data=await hostelData.create({
        name,
        contact,
        email,
        location,
        facilities
   })
   res.status(201).json(data)
}
const updateHostel=async(req,res)=>{
    const {name,contact,email,location,facilities}=req.body
    if(!name || !contact || !email || !location || !facilities){
        res.status(400)
        throw new Error('all fileds are mandatory')
     }
     const data=await hostelData.findByIdAndUpdate(req.params.id, req.body)
     console.log(data)
    res.status(200).json(data)
}
const deleteHostelById=async(req,res)=>{
    const data=await hostelData.findByIdAndDelete(req.params.id)
    res.status(200).json(data)
}
const getHostelById=async(req,res)=>{
    const data=await hostelData.findById(req.params.id)
    if(!data){
        res.status(404)
        throw new Error("hostel not found")
    }
    res.status(200).json(data)
}
module.exports={getallhostels,createHostel,updateHostel,deleteHostelById,getHostelById}