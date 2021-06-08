import React from "react";
import { Container, Typography as Font, Paper, Grid } from "@material-ui/core";
import CSS3 from "../../assets/pics/css3.png";
import HTML5 from "../../assets/pics/html5.png";
import JS from "../../assets/pics/js.png";
import NODE from "../../assets/pics/node.png";
import MONGODB from "../../assets/pics/mongodb.png";
import REACT from "../../assets/pics/react.png";
import REDUX from "../../assets/pics/redux.png";
import SASS from "../../assets/pics/sass.png";

function About() {
  return (
    <Container component="article" className="AboutRoot" id="about" maxWidth="lg">
      <Container maxWidth="md">
        <Paper id="about-paper">
          <Font variant="h3" component="h1" align="center">
            About Me
          </Font>
          <hr />
          <Font variant="body1">
            I'm currently working at MLS Roofing were I'm working in multiple
            projects, one of them including is the company site was created with{" "}
            <b>React.js, Node.Js, HTML5, CSS3, and JavaScript ES6</b>.
            <br />
            <br />
            I'm currently working to get my frontend skills up to date since I
            used to focus in fullstack development. My time consist of 50%
            backend work, usually creating crud operations with <b>Node.Js,
            Express.js, and MongoDB</b>.
            <br />
            <br />
            In total, I have <u>3 years of JavaScript experience</u>. While learning
            new javascript libraries/frameworks, I've been practicing HTML, CSS,
            and SQl on the side to keep me up-to-date.
            <br />
            <br />
            I've been working with graphic engines based on JavaScript as well
            as Electron.Js and React Native. Working with other platforms other
            than web browsers.
          </Font>
          <Font variant="h4" align="center">
            My Stack
          </Font>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            className="MyStack"
            spacing={2}
          >
            <Grid item>
              <img src={HTML5} alt="Html5 Logo" />
            </Grid>
            <Grid item>
              <img src={CSS3} alt="CSS3 Logo" />
            </Grid>
            <Grid item>
              <img src={JS} alt="Javascipt Logo" />
            </Grid>
            <Grid item>
              <img src={MONGODB} alt="Mongodb Logo" />
            </Grid>
            <Grid item>
              <img src={NODE} alt="Node.js Logo" />
            </Grid>
            <Grid item>
              <img src={REACT} alt="React Logo" />
            </Grid>
            <Grid item>
              <img src={REDUX} alt="Redux Logo" />
            </Grid>
            <Grid item>
              <img src={SASS} alt="Sass Logo" />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
}
export default About;
