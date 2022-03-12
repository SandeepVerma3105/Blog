const HttpStatus = require("http-status")

const internalError = new Error("Internal Error")
internalError.status = HttpStatus.INTERNAL_SERVER_ERROR

const dataNotFound = new Error("DataNotFound")
dataNotFound.status = HttpStatus.NOT_FOUND

module.exports = {
    internalError,
    dataNotFound
}