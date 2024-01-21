import React from "react";
import { Container, Typography as Font, Grid } from "@mui/material";
import { aboutPCPic, wave } from "../../assets";

function About() {
  return (
    <div className="AboutRoot" id="about">
      <img src={wave.src} alt={wave.alt} className="Wave" />
      <Container component="article" maxWidth="lg">
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            justifyContent="center"
            minHeight="100vh"
          >
            <Grid
              item
              container
              direction="row"
              wrap="nowrap"
              alignItems="center"
              spacing={2}
              className="AboutContainer"
            >
              <Grid item>
                <img src={aboutPCPic.src} alt={aboutPCPic.alt} />
              </Grid>
              <Grid item>
                <Font variant="h3" component="h2" color="secondary">
                  GET TO KNOW ME
                </Font>
                <Font variant="h2" component="h3">
                  A creator in heart, Developer in mind
                </Font>
                <Font variant="body1">
                  My arsenal of tools I've accumulated while learning and
                  working are technologies based on JavaScript and C#. This
                  includes React, Vue, Node, and Unity.
                  <br />
                  My expertise is dynamic as I have not only developed
                  Websites/APIs, but also mobile development with React Native,
                  Windows applications with Electron, and a discord bot with
                  their respected api.
                  <br />
                  Knowing these cutting edge technologies, my goal is to thrive
                  as a developer by continuing to learn and master new tech as
                  it comes. Collaborating with teams to produce amazing
                  applications will always be rewarding.
                </Font>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
export default About;
