import React, { useState } from "react";

//* Assets
import Resume from "../../assets/etc/Resume.pdf";
import Logo from "../../assets/pics/logo.png";
import Menu from "@material-ui/icons/Menu";
import OpenMenu from "@material-ui/icons/MenuOpen";

//* Components
import SideBar from "../SideBar";
import {
  Paper,
  Grid,
  Typography as Font,
  Button,
  Container,
} from "@material-ui/core";
import { sidebarAni } from "../animeGallery";
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
          <Grid
            component="nav"
            justify="space-between"
            container
            alignItems="center"
          >
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
                  </Button>
                </Grid>
                <Grid item className="DesktopOnly">
                  <Button color="inherit" component="a" href="/#certifications">
                    <Font variant="button">Certifications</Font>
                  </Button>
                </Grid>
                <Grid item id="sidebar-toggle">
                  <Button
                    color="inherit"
                    onClick={() => {
                      sidebarAni();
                      setToggle((p) => !p);
                    }}
                  >
                    {toggle ? <OpenMenu /> : <Menu />}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <SideBar setToggle={setToggle} />
    </>
  );
}
export default Header;
