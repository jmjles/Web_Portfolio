import React from "react";
import portrait from "../../assets/pics/portrait.jpg";
import { Container, Typography as Font, Button, Grid } from "@mui/material";
function Home() {
  return (
    <Container
      align="center"
      maxWidth="md"
      component="article"
      className="HomeRoot"
    >
      <img src={portrait} alt="Self portrait" />
      <Font variant="h1">
        <span id="symbole">{"<"}</span>Jesus Morales
        <span id="symbole">{"/>"}</span>
      </Font>
      <Font variant="body1">
        Full Stack Web Developer
      </Font>
      <Grid container className="Buttons" justifyContent="center" spacing={1}>
        <Grid item xs={12} >
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="/#about"
          >
            <Font variant="button">Learn more about me</Font>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="https://github.com/jmjles"
            target="_blank"
            rel="noopener"
          >
            <Font variant="button">Github</Font>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="https://www.linkedin.com/in/jesus-morales/"
            target="_blank"
            rel="noopener"
          >
            <Font variant="button">LinkedIn</Font>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
