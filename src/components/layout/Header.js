import React from "react";
import { Link } from "react-router-dom";

//* Assets
import linkedin from "../../assets/pics/linkedin-ico.png";
import github from "../../assets/pics/github-ico.png";
import udacity from "../../assets/pics/udacity-ico.png";
import phone from "../../assets/pics/phone.png";
import email from "../../assets/pics/email.png";
import Resume from "../../assets/etc/Resume.pdf";
import Get from "@material-ui/icons/GetApp";
import Logo from "../../assets/pics/logo.png";
import Menu from "@material-ui/icons/Menu";

//* Components
import { socialAni, sidebarAni } from "../animeGallery";
import SideBar from '../SideBar'
import {
  Paper,
  Grid,
  Typography as Font,
  Button,
  Container
} from "@material-ui/core";
function Header() {
  return (
    <>
      <Paper
        elevation={2}
        className="HeaderRoot"
        component="header"
        square={true}
      >
        <Container maxWidth="xl" component="nav">
          <div id="logo-container">
            <img src={Logo} alt="J M Logo" id="Logo" />
          </div>
          <div id="nav-items">
            <Grid container justify="space-evenly" alignItems="center">
              <Grid item className="DesktopOnly">
                <Button
                  variant="contained"
                  component={Link}
                  color="primary"
                  to="/"
                >
                  <Font variant="button">Home</Font>
                </Button>
              </Grid>
              <Grid item className="DesktopOnly">
                <Button
                  variant="contained"
                  component={Link}
                  color="primary"
                  to="/projects"
                >
                  <Font variant="button">Projects</Font>
                </Button>
              </Grid>
              <Grid item className="DesktopOnly">
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
              <Grid item className="DesktopOnly">
                <Button
                  variant="contained"
                  onClick={socialAni}
                  color="secondary"
                >
                  <Font variant="button">Socials</Font>
                </Button>
              </Grid>
              <Grid item>
                <Menu onClick={sidebarAni} />
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
                onClick={socialAni}
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://confirm.udacity.com/QTXW5D2Q"
                target="_blank"
                rel="noopener noreferrer"
                onClick={socialAni}
              >
                <img src={udacity} alt="Udacity" />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://github.com/jmjles"
                target="_blank"
                rel="noopener noreferrer"
                onClick={socialAni}
              >
                <img src={github} alt="Github" />
              </a>
            </Grid>
            <Grid item>
              <a href="tel:+8058259190" onClick={socialAni}>
                <img src={phone} alt="Phone" />
              </a>
            </Grid>
            <Grid item>
              <a href="mail:jmjles@gmail.com" onClick={socialAni}>
                <img src={email} alt="Email" />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <SideBar />
    </>
  );
}
export default Header;
