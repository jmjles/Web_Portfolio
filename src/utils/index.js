import anime from "animejs/lib/anime";
import {
  ethreadIcon,
  lambda,
  mewLogo,
  myPaperImg,
  udacity,
  wgu as w,
  weatherWorldIcon,
} from "../assets";

export const breakpoint = (bp, min = true, unit = "px") =>
  `@media (${min ? "min" : "max"}-width: ${bp}${unit})`;

export const sidebarAni = () => {
  const el = document.querySelector(".SidebarRoot");
  const init = anime.get(el, "width", "px");
  const width = init > 0 ? [init, 0] : [0, "100%"];
  anime({
    targets: ".SidebarRoot",
    width,
    easing: "linear",
    duration: 200,
  });
};

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
  desc: "Completed Lambda School's course in Full Stack Web Development and Technical Interview course.",
  link: "https://www.credly.com/badges/f8cd25ed-aba2-4da6-bdd7-d0daf472fc27?source=linked_in_profile",
  info: "https://lambdaschool.com/courses/full-stack-web-development",
  time: "8/19 - 8/20",
  img: lambda.src,
  alt: lambda.alt,
});

const udacityT = new GridEntry({
  name: "Udacity",
  desc: "Started my Web Development education with Udacity that taught me the fundamentals web development and computer science.",
  link: "https://graduation.udacity.com/confirm/QTXW5D2Q",
  info: "https://www.udacity.com/nanodegree",
  time: "9/17 - 7/18",
  img: udacity.src,
  alt: udacity.alt,
});

const wgu = new GridEntry({
  name: "Western Governors University",
  desc: "In progress of obtaining my bachelor’s degree in software engineering.",
  info: "https://www.wgu.edu/online-it-degrees/software-engineering-bachelors-program.html",
  time: "8/21 - Current",
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

// const ethread = new GridEntry({
//   name: "Ethread",
//   desc: "Ethread is a full stack social media application focusing on specializing anonymous accounts, allowing accounts to bre created within the ethereum chain. The current stack for the back-end is utilizing Node, Express and Graphql as react, react native with expo, and other technologies for the front-end.",
//   time: "",
//   img: ethreadIcon.src,
//   alt: ethreadIcon.alt,
//   code: "https://github.com/jmjles/ethread",
//   link: "https://ethread.jesusmj.com/",
// });

const myPaper = new GridEntry({
  name: "MyPaper",
  desc: "Mypaper is a pdf generator that utilizes templates to create invoices without having to re-enter company information.",
  time: "",
  img: myPaperImg.src,
  alt: myPaperImg.alt,
  code: "https://github.com/jmjles/MyPaper",
  link: "https://my-paper.jesusmj.com/",
});

const weatherApp = new GridEntry({
  name: "Weather World",
  desc: "This is a simple weather app that utilizes multiple frontend libraries in order to create a more interactive experience.",
  time: "",
  img: weatherWorldIcon.src,
  alt: weatherWorldIcon.alt,
  link: "https://weatherworld.jesusmj.com/",
  code: "https://github.com/jmjles/Weather-World",
});

export const education = [wgu, lambdaSchool, udacityT];
export const experiences = [mew, myPaper, weatherApp];
