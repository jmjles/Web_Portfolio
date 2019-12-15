const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Api Location
const keyRoute = require('./config/keys')

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../react-portfolio/build')));   
}
app.use("/api", keyRoute);
// Launch Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
console.log(process.env);