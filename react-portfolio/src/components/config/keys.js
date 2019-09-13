const aws = require('aws-sdk');
let keys = new aws.S3 ({
    google:process.env.google,
    time:process.env.time,
    news:process.env.news,
    weather:process.env.weather,
});

export default keys;