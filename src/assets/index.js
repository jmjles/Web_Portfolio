import locate from "./pics/locationLookup.png";
import clicker from "./pics/clickerGame.png";
import aot from "./pics/aot.png";
import randm from "./pics/rickandmorty.png";
import mls from "./pics/mlsroofing.png";
import HTML from "./pics/html5.png";
import CSS from "./pics/css3.png";
import JS from "./pics/js.png";
import SASS from "./pics/sass.png";
import Mongo from "./pics/mongodb.png";
import React from "./pics/react.png";
import Redux from "./pics/redux.png";

function Img(src, alt) {
  this.src = src;
  this.alt = alt;
}

exports.locateproject = new Img(locate, "Location Lookup screenshot");
exports.clickerGame = new Img(clicker, "Clicker Game screenshot");
exports.albionOnlineTool = new Img(aot, "Albion Online Tool screenshot");
exports.rickandmorty = new Img(randm, "Rick and Morty screenshot");
exports.mls = new Img(mls, "Rick and Morty screenshot");
exports.html = new Img(HTML, "HTML5 Logo");
exports.css = new Img(CSS, "CSS3 Logo");
exports.js = new Img(JS, "JavaScript Logo");
exports.sass = new Img(SASS, "Sass Logo");
exports.mongo = new Img(Mongo, "MongoDb Logo");
exports.react = new Img(React, "React.js Logo");
exports.redux = new Img(Redux, "Redux.js Logo");
