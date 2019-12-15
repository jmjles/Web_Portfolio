const Express = require('express');
const Route = Express.Router();
const LocalKeys = require('./localkeys')
Route.get('/', (req,res) => {
    let keys = {
        google:   process.env.GOOGLE,
        time:     process.env.TIME,
        news:     process.env.NEWS,
        weather:  process.env.WEATHER
    }
    process.env = 'PRODUCTION' ? res.json(LocalKeys): res.json(keys)
})
module.exports = Route;