const aws = require('aws-sdk')
require('dotenv').config()
const keys = ()=>{
    const google=   process.env.GOOGLE;
    const time=     process.env.TIME;
    const news=     process.env.NEWS;
    const weather=  process.env.WEATHER;
    const aws = require('aws-sdk');

    let g = new aws.S3({
        google: process.env.GOOGLE
        });
    return {google,time,news,weather,g};
};

export default keys;