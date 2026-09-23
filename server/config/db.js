const mongoose = require("mongoose")


async function connectDB(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB connected Successfully....")
}

module.exports = connectDB