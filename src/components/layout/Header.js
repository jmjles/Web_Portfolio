import React from "react";
import { Route, Link, Switch } from "react-router-dom";

//* Pages
import Home from "../pages/home";
import Projects from "../pages/projects";

//* Assets
import linkedin from "../../assets/pics/linkedin-ico.png";
import github from "../../assets/pics/github-ico.png";
import udacity from "../../assets/pics/udacity-ico.png";
import phone from "../../assets/pics/phone.png";
import email from "../../assets/pics/email.png";
import Resume from "../../assets/etc/Resume.pdf";
import Get from "@material-ui/icons/GetApp";
import Logo from "../../assets/pics/logo.png";

//* Components
import { socialAni } from "../animeGallery";
import {
  Paper,
  Grid,
  Typography as Font,
  Button,
  Container
} from "@material-ui/core";
function Header() {
  const animate = ({ reverse }) => {
    let x = document.querySelector(".Socials").clientHeight;
    x > 1 ? (reverse = true) : (reverse = false);
    socialAni(reverse);
  };
  return (
    <>
      <Paper elevation={2} className="HeaderRoot" component="header">
        <Container maxWidth="xl" component="nav">
          <div style={{ width: "15%", display: "inline-block",textAlign:'center' }} id='logo-container'>
            <img src={Logo} alt="J M Logo" id="Logo" />
          </div>
          <div id='nav-items'>
            <Grid container justify="space-evenly" alignItems="center">
              <Grid item>
                <Button
                  variant="contained"
                  component={Link}
                  color="primary"
                  to="/"
                >
                  <Font variant="button">Home</Font>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  component={Link}
                  color="primary"
                  to="/projects"
                >
                  <Font variant="button">Projects</Font>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  component="a"
                  href={Resume}
                  target="_blank"
                >
                  <Font variant="button">Resume</Font>
                  <Get />
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={animate} color="secondary">
                  <Font variant="button">Socials</Font>
                </Button>
              </Grid>
            </Grid>
          </div>
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

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
export default Header;
