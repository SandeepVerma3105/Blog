const express = require("express")
const Router = express.Router()
const blogRoute = require("./blog/index")

Router.use(express.json())
Router.use(express.urlencoded({ extended: false }))

Router.use("/blog", blogRoute)




module.exports = Router