import React from "react";
import { Grid, Typography as Font, Paper } from "@mui/material";
import { sidebarAni } from "./animeGallery";
import resume from "../assets/etc/Resume.pdf";
export default function SideBar({ setToggle }) {
  return (
    <Paper elevation={5} className="SidebarRoot" square>
      <Grid container direction="column">
        <Grid
          item
          component="a"
          href="/"
          onClick={() => {
            sidebarAni();
            setToggle(false);
          }}
        >
          <Font>Home</Font>
        </Grid>
        <Grid
          item
          component="a"
          href="/#projects"
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
          component="a"
          href="/#certifications"
          onClick={() => {
            sidebarAni();
            setToggle(false);
          }}
        >
          <Font>Certifications</Font>
        </Grid>
      </Grid>
    </Paper>
  );
}
