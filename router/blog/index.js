const express = require("express")
const route = express.Router()
const blogCotroller = require("./blogController")
const { requestValidator } = require("../../middleware/request_validator")
const blog_schema = require("./schema")
route.post("/addBlog", requestValidator(blog_schema.blogDetail), blogCotroller.addBlog)
route.get("/bloglist", blogCotroller.blogList)
route.put("/updateBlog/:id", blogCotroller.updateBlog)
route.delete("/deleteBlog/:id", blogCotroller.deleteBlog)
module.exports = route