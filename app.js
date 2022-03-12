const express = require("express")
const app = express()
const dotenv = require("dotenv")
const port = process.env.PORT || 8089
const routes = require("./router/index")
const mongoose = require("./config/connction")
app.use("/", routes)
app.listen(port, (err) => {
    if (err) throw err
    else {
        console.log("sever running on port:", port)
    }
})