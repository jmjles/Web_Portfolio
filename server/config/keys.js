const Express = require('express');
const Route = Express.Router();

Route.get('/', (req,res) => {
    let k = {
        google:   process.env.GOOGLE,
        time:     process.env.TIME,
        news:     process.env.NEWS,
        weather:  process.env.WEATHER
    }
})
module.exports = Route;