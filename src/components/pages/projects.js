import React from "react";
import {
  Typography as Font,
  Grid,
  Card,
  Container,
  Button,
  Paper,
} from "@material-ui/core";
const {
  html,
  css,
  js,
  react,
  redux,
  locationLookup,
  sass,
  albionOnlineTool,
  clickerGame,
  rickandmorty,
  mls,
} = require("../../assets/index");
export default function Projects() {
  function Project(name, img, alt, desc, status, link, code, stack) {
    this.name = name;
    this.img = img;
    this.alt = alt;
    this.desc = desc;
    this.status = status;
    this.link = link;
    this.code = code;
    this.stack = stack;
  }

  const LocationLookup = new Project(
    "Location Lookup",
    locationLookup.src,
    locationLookup.alt,
    "Gets The latest news, weather and map of a location with a simple search.",
    "Complete",
    "https://location-lookup.jesusmj.com/",
    "https://github.com/jmjles/location-lookup",
    [html, css, js, react]
  );
  const ClickerGame = new Project(
    "Clicker Game",
    clickerGame.src,
    clickerGame.alt,
    "Click on the character to lvl up!",
    "Complete",
    "https://clicker-game.jesusmj.com/",
    "https://github.com/jmjles/clicker-game",
    [html, css, js, react]
  );
  const RickAndMorty = new Project(
    "Rick And Morty App",
    rickandmorty.src,
    rickandmorty.alt,
    "Shows all locations and characters in rick and morty.",
    "Under Construction",
    "https://rick-and-morty.jesusmj.com/",
    "https://github.com/jmjles/rick-and-morty",
    [html, css, js, react]
  );
  const AlbionOnlineTool = new Project(
    "Albion Online Tool",
    albionOnlineTool.src,
    albionOnlineTool.alt,
    "React Native App utilizing api's to display ingame data.",
    "Under Construction",
    "https://play.google.com/store/apps/details?id=com.jmjles.albiononlinetool",
    "https://github.com/jmjles/albion-online-tool",
    [html, css, js]
  );
  const MLSRoofing = new Project(
    "MLS Roofing",
    mls.src,
    mls.alt,
    "Roofing company website.",
    "Under Construction",
    "https://mlsroofing.com",
    undefined,
    [html, css, js, react, sass]
  );
  const projects = [
    LocationLookup,
    ClickerGame,
    RickAndMorty,
    AlbionOnlineTool,
    MLSRoofing,
  ];

  return (
    <Container maxWidth="xl" component="article" className="ProjectsRoot">
      <Font variant="h3" component="h1">
        My Projects
      </Font>
      <Grid container spacing={5} justify="space-around">
        {projects.map((project) => (
          <Grid key={project.name} item xs={12} sm={6} md={4}>
            <Card elevation={10} className="ProjectCard">
              <Paper elevation={0}>
                <Font variant="h4" component="h2">
                  {project.name}
                </Font>
                <hr />
                <img
                  className="ProjectImage"
                  src={project.img}
                  alt={project.alt}
                />
                <Font variant="body1" align="left">
                  {project.Description}
                </Font>
                <div className="BottomCard">
                  <Font>Project Status:</Font>
                  <Font
                    style={{
                      color: project.status === "Complete" ? "green" : "red",
                    }}
                  >
                    {project.status}
                  </Font>
                  <Font>Stack Implemented</Font>
                  <div className="StackSection">
                    {project.stack.map((tech) => (
                      <img src={tech.src} alt={tech.alt} />
                    ))}
                  </div>
                  <Button
                    variant="contained"
                    href={project.code}
                    onClick={!project.code ? () => alert("Private Repo") : null}
                    target="blank"
                    color="primary"
                  >
                    <Font variant="button">Code</Font>
                  </Button>
                  <Button
                    variant="contained"
                    href={project.link}
                    color="secondary"
                  >
                    <Font variant="button">Try Me</Font>
                  </Button>
                </div>
              </Paper>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
