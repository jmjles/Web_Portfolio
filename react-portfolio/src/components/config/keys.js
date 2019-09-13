const aws = require('aws-sdk');
let keys = new aws.S3 ({
    google:process.env.S3_KEY,
    time:process.env.S3_KEY,
    news:process.env.S3_KEY,
    weather:process.env.S3_KEY
});
export default keys;