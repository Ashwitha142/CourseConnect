const mongoose = require("mongoose")
import { type } from './../node_modules/nodemon/index.d';
const courseSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    instructor : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    level : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    duration : {
        type : Number,
        required : true
    }
},
{
    timestamps : true
})

const Course = new mongoose.model("Course", "courseSchema")

module.exports = Course