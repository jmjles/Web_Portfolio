import React, { useState } from "react";
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
import OpenMenu from "@material-ui/icons/MenuOpen";

//* Components
import { socialAni, sidebarAni } from "../animeGallery";
import SideBar from "../SideBar";
import {
  Paper,
  Grid,
  Typography as Font,
  Button,
  Container,
} from "@material-ui/core";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Paper
        elevation={2}
        className="HeaderRoot"
        component="header"
        square={true}
      >
        <Container maxWidth="lg">
          <Grid component="nav" justify="space-between" container alignItems="center">
            <Grid item id="logo-container">
              <img src={Logo} alt="J M Logo" id="Logo" />
            </Grid>
            <Grid item id="nav-items" sm>
              <Grid container alignItems="center" justify="flex-end">
                <Grid item className="DesktopOnly">
                  <Button component="a" color="inherit" href="/">
                    <Font variant="button">Home</Font>
                  </Button>
                </Grid>
                <Grid item className="DesktopOnly">
                  <Button color="inherit" component="a" href="/#projects">
                    <Font variant="button">Projects</Font>
                  </Button>
                </Grid>
                <Grid item className="DesktopOnly">
                  <Button
                    color="inherit"
                    component="a"
                    href={Resume}
                    target="_blank"
                  >
                    <Font variant="button">Resume</Font>
                    <Get />
                  </Button>
                </Grid>
                <Grid item className="DesktopOnly">
                  <Button onClick={socialAni} color="primary">
                    <Font variant="button">Socials</Font>
                  </Button>
                </Grid>
                <Grid item>
                  {!toggle ? (
                    <Menu
                      onClick={() => {
                        sidebarAni();
                        setToggle(true);
                      }}
                    />
                  ) : (
                    <OpenMenu
                      onClick={() => {
                        sidebarAni();
                        setToggle(false);
                      }}
                    />
                  )}
                </Grid>
              </Grid>
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
      <SideBar setToggle={setToggle} />
    </>
  );
}
export default Header;
