const key = process.env.AUTH

exports.checkReq = (req,res,next) => {
    const providedKey = req.headers.authorization
    return providedKey === key ? next() : res.status(400).send("Not for your eyes...")
}