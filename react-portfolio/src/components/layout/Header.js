import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//* Pages
import Home from "../pages/home";
import Projects from "../pages/projects";
import Clicker from "../pages/clicker";
import Location from "../pages/location";
import wireframes from "../pages/wireframemenu";

//* Assets
import linkedin from "../../assets/pics/linkedin-ico.png";
import github from "../../assets/pics/github-ico.png";
import udacity from "../../assets/pics/udacity-ico.png";
import phone from "../../assets/pics/phone.png";
import email from "../../assets/pics/email.png";

//* Components
import { socialAni } from "../animeGallery";
import {
  Paper,
  Grid,
  Typography as Font,
  Button,
  Container,
  makeStyles
} from "@material-ui/core";


const useStyles = makeStyles({
  headerRoot:{
    '& nav':{
      '& div':{
        paddingTop:'.2rem',
        paddingBottom:'.2rem'
      }
    }
  }
})
function Header() {
  const classes = useStyles()

  const animate = ({ reverse }) => {
    let x = document.querySelector(".Socials").clientHeight;
    x > 1 ? (reverse = true) : (reverse = false);

    socialAni(reverse);
  };
  return (
    <Router>
      <Paper elevation={2} className={classes.headerRoot} component="header">
        <Container maxWidth="lg" component="nav">
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item>
              <Font variant="body1">
                Jesus Morales <i id="desktopOnly">| Fullstack Web Dev</i>
              </Font>
            </Grid>
            <Grid item>
              <Button variant="contained" component={Link} to="/">
                <Font variant="button">Home</Font>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" component={Link} to="/projects">
                <Font variant="button">Projects</Font>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={animate}>
                <Font variant="button">Socials</Font>
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container className="Socials" maxWidth="sm">
          <Grid container justify="center" spacing={3}>
            <Grid item>
              <a
                href="https://www.linkedin.com/in/jesus-morales/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://confirm.udacity.com/QTXW5D2Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={udacity} alt="Udacity" />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://github.com/jmjles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" />
              </a>
            </Grid>
            <Grid item>
              <a href="tel:+8058259190">
                <img src={phone} alt="Phone" />
              </a>
            </Grid>
            <Grid item>
              <a href="mail:jmjles@gmail.com">
                <img src={email} alt="Email" />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/clicker" component={Clicker} />
      <Route exact path="/projects/location" component={Location} />
      <Route exact path="/projects/wireframes" component={wireframes} />
    </Router>
  );
}
export default Header;
