const { ObjectID } = require("bson")
const blogModel = require("../../models/blog")
const httpStatus = require("http-status")
const constents = require("../../constents/constent")
const errors = require("../../error/error")

const addBlog = async(req, res, next) => {
    data = req.item
    let getdata = await blogModel.insertQuery(data)
    if (getdata.error) {
        next(errors.internalError)
    } else {
        res.status(httpStatus.OK).json(getdata)
    }
}

const blogList = async(req, res, next) => {
    data = req.body

    getdata = await blogModel.findQuery(data)
    if (getdata.error) {
        next(errors.internalError)
    } else {
        res.status(httpStatus.OK).json(getdata)
    }

}
const updateBlog = async(req, res, next) => {
    data = req.body
    qury = req.params.id

    getdata = await blogModel.updateQuery(ObjectID(qury), data)
    if (getdata.error) {
        next(errors.internalError)
    }
    if (getdata == 0) {
        next(errors.dataNotFound)
    } else {
        res.status(httpStatus.OK).json({ message: constents.updateUser })
    }
}

const deleteBlog = async(req, res, next) => {
    data = req.params.id

    getdata = await blogModel.deleteQuery({ _id: ObjectID(data) })
    if (getdata.error) {
        next(errors.internalError)
    }
    if (getdata == 0) {
        next(errors.dataNotFound)
    } else {
        res.status(httpStatus.OK).json({ message: constents.deleteUser })
    }
}

module.exports = {
    addBlog,
    blogList,
    updateBlog,
    deleteBlog
}