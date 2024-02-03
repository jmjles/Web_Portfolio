import React from "react";
import { Container, Typography as Font, Grid, IconButton } from "@mui/material";
import {
  cSharp,
  js,
  node,
  portrait,
  react,
  vue,
  wave,
  mongo,
} from "../../assets";
import { socials } from "../../utils/nav";
import { sendClickEvent } from "../../utils/ga";
function Home() {
  const stack = [js, cSharp, react, vue, node, mongo];
  return (
    <Container
      align="center"
      maxWidth="lg"
      component="article"
      className="HomeRoot"
      id="home"
    >
      <Grid container alignContent="center" minHeight="100vh">
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          className="Card"
        >
          <Grid
            container
            direction="row"
            className="Intro"
            justifyContent="center"
          >
            <Grid item className="Small-Portrait">
              <img className="Portrait" src={portrait.src} alt={portrait.alt} />
            </Grid>
            <Grid item>
              <Font variant="h1" fontWeight="bold">
                FullStack Web Developer
              </Font>
              <Font variant="body1">
                Hi there, I'm Jesus Morales. 👋
                <br /> Passionate developer in heart, based in California, USA.
                🦅
              </Font>
            </Grid>
            <Grid item className="Big-Portrait">
              <img className="Portrait" src={portrait.src} alt={portrait.alt} />
            </Grid>
            <Grid item className="Socials">
              <Grid container justifyContent="left">
                {socials.map((s) => (
                  <IconButton
                    key={s.link}
                    href={s.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    aria-label={s.alt}
                    onClick={() => sendClickEvent(s.name)}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" direction="row" spacing={2}>
            <Grid item>
              <Font variant="h2" fontWeight="bold">
                Tech Stack
              </Font>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              direction="row"
              wrap="nowrap"
              className="Stack"
            >
              {stack.map((s) => (
                <Grid item key={s.src}>
                  <img src={s.src} alt={s.alt} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img src={wave.src} alt={wave.alt} className="Wave" />
    </Container>
  );
}
export default Home;
