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
import Udacity from "./pics/udacity.png";
import Lambda from "./pics/lambda.png";
import por from "./pics/Portrait.png";
import cs from "./pics/csv.png";
import c from "./pics/c.png";
import edu from "./pics/education.png";
import homeIco from "./pics/home.png";
import pcIco from "./pics/pc.png";
import aboutIco from "./pics/about.png";
import aboutPC from "./pics/aboutCode.png";
import wavePic from "./pics/wave.png";
import vueIco from "./pics/vue.png";
import nodeIco from "./pics/node.png";
import lAbout from "./pics/line.png";
import lNav from "./pics/lineNav.png";
import western from "./pics/wgu.png";
import mew from "./pics/mew.svg";
import ww from "./pics/ww.png";
import eth from "./pics/ethred.png";
import res from "./etc/Resume.pdf";

function Img({ src, alt, title = "" }) {
  this.src = src;
  this.alt = alt;
  this.title = title;
}
export const resume = new Img({ src: res });
export const ethreadIcon = new Img({ src: eth, alt: "Ethread Logo" });

export const weatherWorldIcon = new Img({ src: ww, alt: "Weather World Logo" });

export const mewLogo = new Img({ src: mew, alt: "MyEtherWallet" });
export const wgu = new Img({
  src: western,
  alt: "Western Governors University logo",
});
export const navLine = new Img({
  src: lNav,
  alt: "decorative line",
});
export const line = new Img({
  src: lAbout,
  alt: "decorative line",
});
export const node = new Img({
  src: nodeIco,
  alt: "Node Icon",
});
export const vue = new Img({
  src: vueIco,
  alt: "Vue Icon",
});
export const education = new Img({
  src: edu,
  alt: "Education Icon",
});
export const home = new Img({
  src: homeIco,
  alt: "Back to top Icon",
});
export const pc = new Img({
  src: pcIco,
  alt: "Experience Icon",
});
export const about = new Img({
  src: aboutIco,
  alt: "About me Icon",
});
export const aboutPCPic = new Img({
  src: aboutPC,
  alt: "Laptop opened showing code",
});
export const wave = new Img({
  src: wavePic,
  alt: "wave Background",
});
export const cSharp = new Img({
  src: c,
  alt: "C Sharp Icon",
});
export const csv = new Img({
  src: cs,
  alt: "CSV Icon",
});
export const portrait = new Img({
  src: por,
  alt: "Self portrait of Jesus Morales",
});

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
