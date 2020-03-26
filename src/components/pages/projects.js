import React from "react";
import {
  Typography as Font,
  Grid,
  Card,
  Container,
  Button,
  Paper
} from "@material-ui/core";
export default function Projects() {
  const projects = [
    {
      name: "Location Lookup",
      Description:
        "Get The latest news, weather and map of a location with a simple search.",
      status: "Complete",
      link: "https://location-lookup.jesusmj.com/",
      code: "https://github.com/jmjles/location-lookup"
    },
    {
      name: "Clicker Game",
      Description: "Click on the character to lvl up!",
      status: "Complete",
      link: "https://clicker-game.jesusmj.com/",
      code: "https://github.com/jmjles/clicker-game"
    },
    {
      name: "Rick And Morty App",
      Description: "Shows all locations and characters in rick and morty.",
      status: "Under Construction",
      link: "https://rick-and-morty.jesusmj.com/",
      code: "https://github.com/jmjles/rick-and-morty"
    }
  ];
  return (
    <Container
      maxWidth="xl"
      component="article"
      className="ProjectsRoot"
    >
      <Font variant="h3" component='h1'>My Projects</Font>
      <Grid container spacing={5} justify="space-around">
        {projects.map(project => (
          <Grid key={project.name} item xs={12} sm={6} md={4}>
            <Card elevation={10} className="ProjectCard">
              <Paper elevation={0}>
                <Font variant="h4" component='h2'>{project.name}</Font>
                <hr/>
                <Font variant="body1" align="left">
                  {project.Description}
                </Font>
                <div className="BottomCard">
                  <Font>Project Status:</Font>
                  <Font
                    style={{
                      color: project.status === "Complete" ? "green" : "red"
                    }}
                  >
                    {project.status}
                  </Font>
                  <br/>
                  <Button
                    variant="contained"
                    href={project.code}
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
