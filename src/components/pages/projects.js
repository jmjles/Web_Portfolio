import React from "react";
import {
  Typography as Font,
  Grid,
  Card,
  Container,
  Button,
  Paper,
} from "@material-ui/core";
export default function Projects() {
  function Project(name, img, alt, desc, status, link, code, stack){
    this.name = name;
    this.img = img;
    this.alt = alt;
    this.desc = desc;
    this.status = status;
    this.link = link;
    this.code = code;
    this.stack = stack;
  };

  const LocationLookup = new Project(
    "Location Lookup",
    "Gets The latest news, weather and map of a location with a simple search.",
    "Complete",
    "https://location-lookup.jesusmj.com/",
    "https://github.com/jmjles/location-lookup"
  );
  const ClickerGame = new Project(
    "Clicker Game",
    "Click on the character to lvl up!",
    "Complete",
    "https://clicker-game.jesusmj.com/",
    "https://github.com/jmjles/clicker-game"
  );
  const RickAndMorty = new Project(
    "Rick And Morty App",
    "Shows all locations and characters in rick and morty.",
    "Under Construction",
    "https://rick-and-morty.jesusmj.com/",
    "https://github.com/jmjles/rick-and-morty"
  );
  const AlbionOnlineTool = new Project(
    "Albion Online Tool",
    "React Native App utilizing api's to display ingame data.",
    "Under Construction",
    "https://play.google.com/store/apps/details?id=com.jmjles.albiononlinetool",
    "https://github.com/jmjles/albion-online-tool"
  );
  const MLSRoofing = new Project(
    "MLS Roofing",
    "Roofing company website.",
    "Under Construction",
    "https://mlsroofing.com",
    undefined
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
                  <br />
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
