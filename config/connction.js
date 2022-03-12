const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/blog"

//create connection with mongodb
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', function() {
    console.log("connected")
})
module.exports = mongoose