import React, { useEffect } from "react";
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
function Home() {
  useEffect(() => {
    let init = false;
    const delay = () => {
      if (init) {
        return 1000 * 0;
      } else {
        init = true;
        return 1000 * 2;
      }
    };
    anime({
      targets: "#lines #path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      delay: anime.stagger(1000 * 1),
      duration: 2000
    });
    anime({
      targets: "#lines #path",
      strokeWidth: [2, 5],
      easing: "easeInOutSine",
      delay,
      loop: true,
      direction: "alternate"
    });
    anime({
      targets: "#lines #path",
      stroke: ["#000", "#598288"],
      easing: "easeInOutSine",
      delay,
      loop: true,
      direction: "alternate"
    });
  }, []);
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
            <Font variant="h2" component='h1' align='left'>Welcome</Font>
            <Font variant='subtitle1' align='right'>
              to my tiny corner of the world wide web.
            </Font>
            <hr/>
            <Font variant="body1" align="left">
              My name is Jesus Morales, and I'm a Full Stack Web Developer.<br/>
              Availabilty for relocation is always up for descussion. I'm Currently based on Los Angeles, Ca.<br/>
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
    </>
  );
}
export default Home;
