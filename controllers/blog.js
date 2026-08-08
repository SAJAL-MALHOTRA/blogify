const Blog = require("../models/blog");


async function uploadBlog(req,res) {
const {title ,body } = req.body;

    
    await Blog.create({
         title:title,
         body:body,
         coverImageURL:`/uploads/${req.user.username}/${req.file.filename}`,
         createdBy: req.user.userId,
     });

    return res.redirect("/");
}


 module.exports = { uploadBlog };