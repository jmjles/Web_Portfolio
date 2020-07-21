import locate from "./pics/locationLookup.png";
import clicker from "./pics/clickerGame.png";
import aot from "./pics/aot.png";
import randm from "./pics/rickandmorty.png";
import MLS from "./pics/mlsroofing.png";
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
export const locationLookup = new Img(locate, "Location Lookup screenshot");
export const clickerGame = new Img(clicker, "Clicker Game screenshot");
export const albionOnlineTool = new Img(aot, "Albion Online Tool screenshot");
export const rickandmorty = new Img(randm, "Rick and Morty screenshot");
export const mls = new Img(MLS, "Rick and Morty screenshot");
export const html = new Img(HTML, "HTML5 Logo");
export const css = new Img(CSS, "CSS3 Logo");
export const js = new Img(JS, "JavaScript Logo");
export const sass = new Img(SASS, "Sass Logo");
export const mongo = new Img(Mongo, "MongoDb Logo");
export const react = new Img(React, "React.js Logo");
export const redux = new Img(Redux, "Redux.js Logo");
