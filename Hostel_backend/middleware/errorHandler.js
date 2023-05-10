const {constants}=require('./constant')
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode :500;
    switch(statusCode){
    case constants.NOT_FOUND:
        res.json({title:'user not found',message : err.message ,stackTrace:err.stack})
        break;
    case constants.FORBIDDEN:
        res.json({title:'not authorized ',message : err.message ,stackTrace:err.stack})
        break;
    case constants.VALIDATION_FAILED:
        res.json({title:'fields are required',message : err.message ,stackTrace:err.stack})
        break;
    case constants.SERVER_ERROR:
            res.json({title:'Internal server error',message : err.message ,stackTrace:err.stack})
            break;
    default:
        console.log("No Error")
        break;
    }
}
module.exports=errorHandler