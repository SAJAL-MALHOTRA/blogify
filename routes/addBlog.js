const express = require("express")
const router = express.Router();
const{
    uploadBlog,
} = require("../controllers/blog.js")

const auth = require("../middlewares/login")

router.get("/",auth,(req,res)=>{
  return res.render("addBlog")
});
const fs = require("fs");
const multer = require("multer")
const storage = multer.diskStorage({
destination:function(req,file,cb){  const userFolder = `public/uploads/${req.user.username}`;

    // create folder if not exists
    fs.mkdirSync(userFolder, { recursive: true });

    cb(null, userFolder);},
filename:function(req,file,cb){ cb(null, Date.now() + "-" + file.originalname);},
});

const upload = multer({storage});
 router.post("/",auth, upload.single("coverImageURL"),uploadBlog)




module.exports = router;