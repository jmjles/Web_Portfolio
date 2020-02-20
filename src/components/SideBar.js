import React from "react";
import { Grid, Typography as Font } from "@material-ui/core";
import { Link } from "react-router-dom";
import { socialAni } from "./animeGallery";
import resume from "../assets/etc/Resume.pdf";
export default function SideBar() {
  const animate = ({ reverse }) => {
    let x = document.querySelector(".Socials").clientHeight;
    x > 1 ? (reverse = true) : (reverse = false);
    socialAni(reverse);
  };
  return (
    <Grid className="SidebarRoot" container direction="column">
      <Grid item component={Link} to="/">
        <Font>Home</Font>
      </Grid>
      <Grid item component={Link} to="/projects">
        <Font>Projects</Font>
      </Grid>
      <Grid item component="a" href={resume} target="_blank">
        <Font>Resume</Font>
      </Grid>
      <Grid item onClick={animate}>
        <Font>Socials</Font>
      </Grid>
    </Grid>
  );
}
