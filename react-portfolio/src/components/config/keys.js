const keys = ()=>{
    const google=   'process.env.google';
    const time=     process.env.time;
    const news=     process.env.news;
    const weather=  process.env.weather;
    return {google,time,news,weather};
};

export default keys;