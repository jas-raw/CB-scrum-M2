const express = require("express");
const {usuarios} = require('./user_routes')

const router = express.Router();

router.use('/users', usuarios)

module.exports = {
    router
}