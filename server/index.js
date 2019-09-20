const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Api Location
const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../react-portfolio/build')));
}
else{
    app.use(express.static(path.join(__dirname,'../react-portfolio/src')));
}
// Launch Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
console.log(process.env);