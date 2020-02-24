import React from "react";
import { Grid, Typography as Font, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { socialAni,sidebarAni } from "./animeGallery";
import resume from "../assets/etc/Resume.pdf";
export default function SideBar() {
  return (
    <Paper elevation={5} className="SidebarRoot" square>
      <Grid container direction="column">
        <Grid item component={Link} to="/" onClick={sidebarAni}>
          <Font>Home</Font>
        </Grid>
        <Grid item component={Link} to="/projects" onClick={sidebarAni}>
          <Font>Projects</Font>
        </Grid>
        <Grid
          item
          component="a"
          href={resume}
          target="_blank"
          onClick={sidebarAni}
        >
          <Font>Resume</Font>
        </Grid>
        <Grid
          item
          onClick={() => {
            socialAni();
            sidebarAni();
          }}
        >
          <Font>Socials</Font>
        </Grid>
      </Grid>
    </Paper>
  );
}
