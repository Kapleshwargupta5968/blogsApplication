const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected successfully ${conn.connection.host}`);
    }catch(error){
        console.log(`MongoDB discconnected, ${error.message}`);
        process.exit(1);
    }
}
module.exports = connectDB;