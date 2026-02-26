import {
  degree,
  ethreadIcon,
  lambda,
  mewLogo,
  myPaperImg,
  udacity,
  wgu as w,
} from "../assets";
import { animate, utils } from "animejs";
export const breakpoint = (bp, min = true, unit = "px") =>
  `@media (${min ? "min" : "max"}-width: ${bp}${unit})`;

export const sidebarAni = () => {
  const el = document.querySelector(".SidebarRoot");
  const init = utils.get(el, "width", "px");
  const width = init > 0 ? [init, 0] : [0, "100%"];
  animate({
    targets: ".SidebarRoot",
    width,
    easing: "linear",
    duration: 200,
  });
};

export const fadeIn = (name) =>
  animate(name, {
    ease: "linear",
    opacity: { from: 0, to: 1 },
    delay: 2000,
    duration: 1000,
  });

export const fadeOut = (name) =>
  animate(name, {
    ease: "linear",
    opacity: { from: 1, to: 0 },
    delay: 2000,
    duration: 1000,
  });

function GridEntry({
  name,
  desc,
  link,
  code,
  type,
  img,
  alt,
  info,
  time,
  svg,
}) {
  this.name = name;
  this.img = img;
  this.alt = alt;
  this.type = type;
  this.time = time;
  this.svg = svg;
  this.desc = desc;
  this.link = link;
  this.info = info;
  this.code = code;
}

const lambdaSchool = new GridEntry({
  name: "Lambda School",
  desc: "",
  link: "https://www.credly.com/badges/f8cd25ed-aba2-4da6-bdd7-d0daf472fc27?source=linked_in_profile",
  time: "8/19 - 8/20",
  img: lambda.src,
  alt: lambda.alt,
});

const udacityT = new GridEntry({
  name: "Udacity",
  desc: "",
  link: "https://www.udacity.com/certificate/e/42276e96-bec1-11e7-b710-3b805275b310",
  time: "9/17 - 7/18",
  img: udacity.src,
  alt: udacity.alt,
});

const wgu = new GridEntry({
  name: "Western Governors University",
  time: "8/21 - 12/25",
  link: degree.src,
  img: w.src,
  alt: w.alt,
});

const mew = new GridEntry({
  name: "MyEtherWallet",
  desc: "MEW (MyEtherWallet) is a free, client-side interface that helps you interact with the Ethereum blockchain. They are an open source platform that allows you to generate wallets, interact with smart contracts, and use Dapps.\nMy main role was to work on upcoming features, participate in eliminating high priority bugs, and collaborating with my team, whether when implementing new features, or anyone needing assistance in completing a task. More details about my role can be read in my resume.",
  time: "1/22 - 3/23",
  img: mewLogo.src,
  alt: mewLogo.alt,
  code: "",
  info: "https://github.com/MyEtherWallet/MyEtherWallet/pulls?q=is%3Apr+author%3Ajmjles+is%3Aclosed",
});

const ethread = new GridEntry({
  name: "Ethread",
  desc: "Ethread is a full stack social media application focusing on specializing anonymous accounts, allowing accounts to bre created within the ethereum chain. The current stack for the back-end is utilizing Node, Express and Graphql as react, react native with expo, and other technologies for the front-end.",
  time: "",
  img: ethreadIcon.src,
  alt: ethreadIcon.alt,
  code: "https://github.com/jmjles/ethread",
  link: "https://ethread.jesusmj.com/",
});

const myPaper = new GridEntry({
  name: "MyPaper",
  desc: "Mypaper is a pdf generator that utilizes templates to create invoices without having to re-enter company information.",
  time: "",
  img: myPaperImg.src,
  alt: myPaperImg.alt,
  code: "https://github.com/jmjles/MyPaper",
  link: "https://my-paper.jesusmj.com/",
});

const pizzaPictures = [
  require("../assets/pics/pizzaParlor/welcome.png"),
  require("../assets/pics/pizzaParlor/stores.png"),
  require("../assets/pics/pizzaParlor/login.png"),
  require("../assets/pics/pizzaParlor/menu.png"),
  require("../assets/pics/pizzaParlor/item-order.png"),
  require("../assets/pics/pizzaParlor/editmenu.png"),
  require("../assets/pics/pizzaParlor/orders.png"),
  require("../assets/pics/pizzaParlor/sales-report.png"),
];
const pizzaParlor = new GridEntry({
  name: "Pizza Parlor",
  desc: "An online POS system intended for pizzerias. Provides a platform for customers to place orders along with order tracking and account management. Inventory tracking, report generation and order management are available for vendors.",
  time: "",
  img: pizzaPictures,
  alt: "Screenshots of the pizza parlor",
  link: "https://pizza-parlor.jesusmj.com/",
  code: "https://github.com/jmjles/pizza-parlor",
});

const homePictures = [
  require("../assets/pics/homeHaven/desktop.png"),
  require("../assets/pics/homeHaven/desktop-details.png"),
  require("../assets/pics/homeHaven/mobileLanding.png"),
  require("../assets/pics/homeHaven/mobile.png"),
  require("../assets/pics/homeHaven/desktop-details.png"),
];

const homeHaven = new GridEntry({
  name: "HomeHaven Rentals",
  desc: "A SPA developed to enable businesses' showcase properties. A description of each property is displayed along with contact details for the property manager for each property.",
  time: "",
  img: homePictures,
  alt: "Screenshots of the pizza parlor",
  link: "https://homehavenrentals.jesusmj.com/",
  code: "https://github.com/jmjles/HomeHaven-Rentals",
});

export const education = [wgu, lambdaSchool, udacityT];
export const experiences = [mew, pizzaParlor, homeHaven];
