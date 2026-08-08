const express = require("express")
const router = express.Router();
const{
    createNewUser
} = require("../controllers/register")

router.get("/",(req,res)=>{
    return res.render("register")
})

router.post("/",createNewUser);

module.exports = router;