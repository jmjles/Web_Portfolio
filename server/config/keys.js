const Route = require('express').Router();
const {checkReq} = require('../middleware/auth')
Route.get('/', checkReq, (req,res) => {
    let keys = {
        google:   process.env.GOOGLE,
        time:     process.env.TIME,
        news:     process.env.NEWS,
        weather:  process.env.WEATHER
    }
    res.status(200).json(keys)
})
module.exports = Route;