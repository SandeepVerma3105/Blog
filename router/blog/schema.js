const joi = require("joi")

const blogDetail = joi.object().keys({
    title: joi.string().required(),
    author: joi.string().required(),
    book_name: joi.string().required(),
    category: joi.string().required(),
    email: joi.string().required().email(),

})

module.exports = {
    blogDetail
}