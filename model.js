const mongoose=require("mongoose");
const blogSchema = mongoose.Schema({
     author:String,
     title:String,
     content:String,
     year:Number
});
const model=mongoose.model('Blog',blogSchema)
module.exports=model;

