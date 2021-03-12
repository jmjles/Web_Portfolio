import React, { useEffect } from "react";
import About from "./about";
import { Link } from "react-router-dom";
import {
  Container,
  Typography as Font,
  Button,
  Card,
  Paper,
} from "@material-ui/core";
import { homeAni } from "../animeGallery";
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
    homeAni(delay);
  }, []);
  return (
    <>
      <Container
        align="center"
        maxWidth="md"
        component="article"
        className="HomeRoot"
      >
        <Font variant="h1">
          <span id="symbole">{"<"}</span>Jesus Morales
          <span id="symbole">{"/>"}</span>
        </Font>
        <Font variant="body1">Full Stack Web Developer</Font>
        <Button variant="outlined" color="primary" component="a" href="/#about">
          <Font variant="button">Learn more about me</Font>
        </Button>
      </Container>
    </>
  );
}
export default Home;
