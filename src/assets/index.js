import locate from "./pics/locationLookup.png";
import aot from "./pics/aot.png";
import HTML from "./pics/html5.png";
import CSS from "./pics/css3.png";
import JS from "./pics/js.png";
import SASS from "./pics/sass.png";
import Mongo from "./pics/mongodb.png";
import React from "./pics/react.png";
import Redux from "./pics/redux.png";
import Gallery from "./pics/gallery-project.png";
import Multiform from "./pics/multiform-example.png";
import Udacity from "./pics/udacity-cert.png";
import Lambda from "./pics/lambda-cert.png";
function Img({ src, alt, title = "" }) {
  this.src = src;
  this.alt = alt;
  this.title = title;
}
export const locationLookup = new Img({
  src: locate,
  alt: "Location Lookup screenshot",
});

export const albionOnlineTool = new Img({
  src: aot,
  alt: "Albion Online Tool screenshot",
});
export const html = new Img({ src: HTML, alt: "HTML5 Logo", title: "HTML5" });
export const css = new Img({ src: CSS, alt: "CSS3 Logo", title: "CSS3" });
export const js = new Img({
  src: JS,
  alt: "JavaScript Logo",
  title: "JavaScript",
});
export const sass = new Img({ src: SASS, alt: "Sass Logo", title: "SASS" });
export const mongo = new Img({
  src: Mongo,
  alt: "MongoDb Logo",
  title: "MongoDB",
});
export const react = new Img({
  src: React,
  alt: "React.js Logo",
  title: "React.js",
});
export const redux = new Img({
  src: Redux,
  alt: "Redux.js Logo",
  title: "Redux.js",
});
export const gallery = new Img({ src: Gallery, alt: "Gallery Screenshot" });
export const multiform = new Img({
  src: Multiform,
  alt: "Multiform Screenshot",
});

export const lambda = new Img({
  src: Lambda,
  alt: "Lambda Certification Screenshot",
});
export const udacity = new Img({
  src: Udacity,
  alt: "Udacity Certification Screenshot",
});
