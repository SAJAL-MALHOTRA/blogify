const Blog = require("../models/blog");





async function displayBlog(req,res) {
    const id = req.params.id;
    
const blog = await Blog.findById(id)
                                    .populate("createdBy")
                                    .populate("comments.createdBy")
;

  return res.render("displayBlog.ejs",{blog:blog})  
}
  
  async function createComment(req,res) {
      await Blog.findByIdAndUpdate(
         req.params.id ,
         {
             $push: {
                comments: {
                    body: req.body.body,
                    createdBy: req.user.userId
                }
            }
        }
    )
    res.redirect(`/displayBlog/${req.params.id}`)
  }
    
 
module.exports={displayBlog,createComment}