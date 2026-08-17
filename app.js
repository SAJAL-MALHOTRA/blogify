require("dotenv").config();
// hi i am sajal



const express = require("express");
const path = require("path")
const ejs = require("ejs")
const userRegister = require("./routes/register")
const userLogin = require("./routes/login")
const logout = require("./routes/logout")
const addBlog = require("./routes/addBlog")
const display = require("./routes/display")


const app = express();
 const PORT = process.env.PORT||3001;

app.use(express.static("public")); // image upload


 //connections

const connect = require("./connections");
connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
//parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


 app.set("view engine","ejs");
 app.set("views",path.resolve("./views"));

 const auth = require("./middlewares/login")
app.get("/",auth,async(req,res)=>{
    const Blog = require("./models/blog");
   const blogs = await Blog.find();
   
   res.render("home", { Blogs: blogs });
})

app.use("/register",userRegister)
app.use("/login",userLogin)
app.use("/logout",logout)
app.use("/addBlog",addBlog)
app.use("/displayBlog",display)




 app.listen(PORT,()=>{
    console.log("server started")
 })
