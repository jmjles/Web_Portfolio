import React from "react";
import About from "./about";
import Projects from './projects'
import { Link } from "react-router-dom";
import {
  Container,
  Typography as Font,
  Button,
  Card,
  Paper
} from "@material-ui/core";

function Home() {
  return (
    <>
      <Container
        align="center"
        maxWidth="sm"
        component="article"
        className="HomeRoot"
      >
        <Card elevation={5}>
          <Paper>
            <Font variant="h1">Welcome</Font>
            <Font variant="body1" align="left">
              I have always dreamed of being a Developer.
              <br />
              Creating things that came up in my mind was always a thrill to me
              and will always will be!
              <br />
              Please enjoy exploring my website.
              <br />
              Thank you for your time and consideration.
            </Font>
            <br />
            <Button
              variant="contained"
              component={Link}
              color="primary"
              to="/projects"
            >
              <Font variant="button">Projects</Font>
            </Button>
          </Paper>
        </Card>
      </Container>
      <About />
      <Projects/>
    </>
  );
}
export default Home;
