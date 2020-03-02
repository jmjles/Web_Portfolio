import React from "react";
import { Grid, Typography as Font, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { socialAni, sidebarAni } from "./animeGallery";
import resume from "../assets/etc/Resume.pdf";
export default function SideBar({ setToggle }) {
  return (
    <Paper elevation={5} className="SidebarRoot" square>
      <Grid container direction="column">
        <Grid
          item
          component={Link}
          to="/"
          onClick={() => {
            sidebarAni();
            setToggle(false);
          }}
        >
          <Font>Home</Font>
        </Grid>
        <Grid
          item
          component={Link}
          to="/projects"
          onClick={() => {
            sidebarAni();
            setToggle(false);
          }}
        >
          <Font>Projects</Font>
        </Grid>
        <Grid
          item
          component="a"
          href={resume}
          target="_blank"
          onClick={() => {
            sidebarAni();
            setToggle(false);
          }}
        >
          <Font>Resume</Font>
        </Grid>
        <Grid
          item
          onClick={() => {
            socialAni();
            sidebarAni();
            setToggle(false);
          }}
        >
          <Font>Socials</Font>
        </Grid>
      </Grid>
    </Paper>
  );
}
