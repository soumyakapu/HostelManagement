const  mongoose = require("mongoose")
const connectDb= async()=>{
    try {
      const connect=  await mongoose.connect(process.env.DATABASE_NAME)
      connect.connection.name
    } catch (error) {
        process.exit(1);
    }
  
}
module.exports=connectDb;
