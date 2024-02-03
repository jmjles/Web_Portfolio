import {
  Description,
  GitHub,
  Home,
  LinkedIn,
  Person,
  School,
  Terminal,
} from "@mui/icons-material";
import resume from "../assets/etc/Resume.pdf";
class Nav {
  constructor({ location, icon, link, alt, name }) {
    this.location = location;
    this.icon = icon;
    this.link = link;
    this.alt = alt;
    this.name = name;
  }
  scrollTo() {
    if (this.location)
      document
        .getElementById(this.location)
        .scrollIntoView({ behavior: "smooth" });
  }
}

export const navs = [
  new Nav({
    location: "home",
    icon: (color) => <Home fontSize="large" htmlColor={color} />,
    name: "Home",
  }),
  new Nav({
    location: "experience",
    icon: (color) => <Terminal fontSize="large" htmlColor={color} />,
    name: "Experience",
  }),
  new Nav({
    location: "about",
    icon: (color) => <Person fontSize="large" htmlColor={color} />,
    name: "About",
  }),
  new Nav({
    location: "education",
    icon: (color) => <School fontSize="large" htmlColor={color} />,
    name: "Education",
  }),
];

export const socials = [
  new Nav({
    link: "https://github.com/jmjles",
    icon: <GitHub htmlColor="black" />,
    alt: "Github",
  }),
  new Nav({
    link: resume,
    icon: <Description htmlColor="darkgreen" />,
    alt: "Resume",
  }),
  new Nav({
    link: "https://www.linkedin.com/in/jesus-morales/",
    icon: <LinkedIn htmlColor="#0A66C2" />,
    alt: "LinkedIn",
  }),
];
