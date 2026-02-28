import React from "react";
import { Container, Typography as Font, Grid, Stack } from "@mui/material";
import { aboutPCPic, wave } from "../../assets";

function About() {
  return (
    <div className="AboutRoot" id="about">
      <img src={wave.src} alt={wave.alt} className="Wave" />
      <Container component="article" maxWidth="lg">
        <Container maxWidth="lg">
          <Stack justifyContent="center" minHeight="100vh">
            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              spacing={2}
              className="AboutContainer"
            >
              <Grid minWidth={"auto"}>
                <img src={aboutPCPic.src} alt={aboutPCPic.alt} />
              </Grid>
              <Grid>
                <Font variant="h5" component="h2" color="secondary">
                  GET TO KNOW ME
                </Font>
                <Font variant="h2" component="h3">
                  A creator at heart, developer by mind
                </Font>
                <Font variant="body1">
                  I build modern software applications using
                  <b> JavaScript and C#</b>, focusing technologies such as
                  <b> React.js, Vue.js, Node.js, and Godot</b>.
                  <br />
                  My professional experience consists of <b>creating API's</b>,
                  implementing <b>production-ready features</b>, improving
                  internal tools, and improving existing codebases.
                </Font>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Container>
    </div>
  );
}
export default About;
