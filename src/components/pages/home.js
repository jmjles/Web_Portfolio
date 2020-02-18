import React,{useEffect} from "react";
import About from "./about";
import { Link } from "react-router-dom";
import {
  Container,
  Typography as Font,
  Button,
  Card,
  Paper
} from "@material-ui/core";
import anime from "animejs/lib/anime";
import {Waypoint} from 'react-waypoint'
function Home() {
  useEffect(()=>{
    console.log('called')
          anime({
            targets: "path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 2000,
          });
  },[])
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

      <svg viewBox="0 0 1920 1080" preserveAspectRatio="none" id="lines">
        <path
          id="path"
          d="M -18.00,910.50
           C 693.00,790.50 1129.50,973.50 1401.00,876.00
             1672.50,778.50 1939.50,757.50 1938.00,805.50
             1936.50,853.50 1933.50,1101.00 1933.50,1101.00
             1933.50,1101.00 -22.50,1108.50 -22.50,1108.50
             -22.50,1108.50 -18.00,909.00 -18.00,909.00"
        />
      </svg>
      <About />
      <Waypoint onEnter={() => console.log("hi")} />
    </>
  );
}
export default Home;
