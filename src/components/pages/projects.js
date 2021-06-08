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
  locationLookup,
  albionOnlineTool,
  gallery,
  multiform,
} = require("../../assets/index");
export default function Projects() {
  function Project(name, img, alt, desc, link, code, stack) {
    this.name = name;
    this.img = img;
    this.alt = alt;
    this.desc = desc;
    this.link = link;
    this.code = code;
    this.stack = stack;
  }

  const AlbionOnlineTool = new Project(
    "Albion Online Tool",
    albionOnlineTool.src,
    albionOnlineTool.alt,
    "React Native App utilizing APIs to display in-game data such as players, guilds, market items, and info about each item. \n The UI supports multiple languages.",
    "https://play.google.com/store/apps/details?id=com.jmjles.albiononlinetool",
    "https://github.com/jmjles/albion-online-tool",
    [html, css, js]
  );

  const Gallery = new Project(
    "Gallery",
    gallery.src,
    gallery.alt,
    "Experimented with Grid and FlexBox to create a simple gallery. Utilized react to transition between both layouts and CSS3 animations to ease in context to each photo",
    "https://gallery.jesusmj.com",
    "https://github.com/jmjles/gallery",
    [html, js, react]
  );

  const Multiform = new Project(
    "MultiStep Form",
    multiform.src,
    multiform.alt,
    "Created a simple form that consists of multiple steps, essential breaking down a long form for a more simpler feel. Data inputted is not processed to any server.",
    "https://multiform.jesusmj.com",
    "https://github.com/jmjles/multiform",
    [html, js, react]
  );

  const LocationLookup = new Project(
    "Location Lookup",
    locationLookup.src,
    locationLookup.alt,
    "Used several APIs from different providers to display the weather, time, and map from a location entered by the user.",
    "https://location-lookup.jesusmj.com",
    "https://github.com/jmjles/location-lookup",
    [html, js, react]
  );
  const projects = [AlbionOnlineTool, Gallery, Multiform, LocationLookup];

  return (
    <Container
      component="article"
      className="ProjectsRoot"
      id="projects"
      maxWidth="xl"
    >
      <Font variant="h2" component="h1">
        Side Projects
      </Font>
      <Container maxWidth="lg">
        <Grid container spacing={5} justify="center">
          {projects.map((project, i) => (
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
                    {project.desc}
                  </Font>
                  <div className="BottomCard">
                    <Font variant="h5">Stack Implemented</Font>
                    <Grid container className="StackSection">
                      {project.stack.map((tech) => (
                        <Grid item key={tech.src}>
                          <img
                            src={tech.src}
                            alt={tech.alt}
                            title={tech.title}
                          />
                        </Grid>
                      ))}
                    </Grid>
                    <Button
                      variant="contained"
                      href={project.code}
                      onClick={
                        !project.code ? () => alert("Private Repo") : null
                      }
                      target="_blank"
                      color="primary"
                    >
                      <Font variant="button">Code</Font>
                    </Button>
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
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
    </Container>
  );
}
