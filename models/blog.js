
const mongoose = require("mongoose");
const { Schema } = mongoose;  

const blogSchema = new mongoose.Schema({
title:{
    type:String,
    
    required:true,
},
body:{
    type:String,
   
    required:true,
},
coverImageURL:{
    type:String,
    required:false,
},
createdBy:{
    type:Schema.Types.ObjectId,
    ref: "User"
},
comments: [
    {
      body: {
        type: String,
        required: true,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;