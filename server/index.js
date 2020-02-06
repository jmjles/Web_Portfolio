const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middleware
const middleware = [cors(), express.json()];

app.use(middleware);

// Api Location
const keyRoute = require("./config/keys");

const port = process.env.PORT;

app.use("/api", keyRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../react-portfolio/build")));
}

// Launch Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
