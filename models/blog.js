const mongoose = require("mongoose")
const blog_schema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    book_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})


const blog = mongoose.model('blog', blog_schema)

const findQuery = async(data = {}, res) => {

    if (!data.sortKey && !data.order) {
        sort = {}
    }
    if (data.sortKey && !data.order) {
        sort = { sortKey: 1 }
    }
    if (!data.sortKey && data.order) {
        sort = { _id: 1 }
    } else {
        sortKey = data.sortKey,
            order = data.order
        sort = { sortKey: order }
    }

    try {
        res = await blog.find(data).sort(sort).skip(data.skip).limit(data.limit)
        if (res.length > 0) {
            return res
        } else {
            return 0
        }
    } catch (err) {
        return { error: err }
    }
}
const insertQuery = async(data, res) => {
    try {
        console.log(data)
        res = await blog.insertMany(data)
        if (res.length > 0) {
            return res
        } else {
            return 0
        }
    } catch (err) {
        return { error: err }
    }
}
const updateQuery = async(qury, data, res) => {
    try {
        res = await blog.findByIdAndUpdate(qury, data)
        console.log(res)
        if (res == null) {
            return 0
        } else {
            return 1
        }
    } catch (err) {
        return { error: err }
    }
}

const deleteQuery = async(data, res) => {
    try {
        res = await blog.deleteOne(data)
        if (res.deletedCount == 1) {
            return 1
        } else {
            return 0
        }
    } catch (err) {
        return { error: err }
    }
}

module.exports = {
    insertQuery,
    findQuery,
    updateQuery,
    deleteQuery
}