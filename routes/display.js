const express = require("express")
const router = express.Router();
const{
    displayBlog,
    createComment
} = require("../controllers/display")

const auth = require("../middlewares/login")
router.get("/:id",auth,displayBlog)
router.post("/:id",auth,createComment)

module.exports = router;