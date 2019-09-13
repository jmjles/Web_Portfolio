const aws = require('aws-sdk')
const keys = ()=>{
    const google=   process.env.google;
    const time=     process.env.time;
    const news=     process.env.news;
    const weather=  process.env.weather;
    const aws = require('aws-sdk');

    let g = new aws.S3({
        google: process.env.google
        });
    return {google,time,news,weather,g};
};

export default keys;