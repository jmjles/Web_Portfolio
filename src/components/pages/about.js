import React from "react";
import Portrait from "../../assets/pics/portrait.jpg";
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
    <Container
      component="article"
      className="AboutRoot"
      id="about"
    >
      <Container maxWidth="md">
        <Paper id="about-paper">
          <Font variant="h3" component="h1" align="center">
            About Me
          </Font>
          <hr />
          <div id="portrait-container">
            <img id="portrait" src={Portrait} alt="A portrait of Jesus M." />
          </div>
          <div id="text-container">
            <Font variant="body1">
              Full stack web developer specializing in javascript.<br/><br/>
              
              Experienced with MERN (MongoDb, Express, React, and Node)  <br/><br/>

              When I'm not coding, you can find me pushing some weights or playing some games. 
            </Font>
          </div>
        </Paper>
      </Container>
      <Paper className="MyStack" square>
        <Font variant="h4" align="center">
          My Stack
        </Font>
        <Grid container justify="space-evenly" alignItems="center">
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
  );
}
export default About;
