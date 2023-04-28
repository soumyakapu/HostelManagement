const express=require('express')
const router=express.Router()
const {getallhostels,createHostel,updateHostel,deleteHostelById,getHostelById}=require('../controller/HostelRegistrationController')
router.route("/all").get(getallhostels);
router.route('/create').post(createHostel);
router.route('/:id').put(updateHostel).delete(deleteHostelById).get(getHostelById);
module.exports=router