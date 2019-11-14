import React, { Component } from "react";
import { Link } from "react-router-dom";
import getStatus from "../apps/getStatus";
import {
  Typography as Font,
  Grid,
  Card,
  Container,
  Button
} from "@material-ui/core";
class Projects extends Component {
  state = {
    projects: [
      {
        name: "Location Lookup",
        Description:
          "Get The latest news, weather and map of a location with a simple search.",
        status: "Under Construction",
        link: "/projects/location",
        code:
          "https://github.com/jmjles/React_Portfolio/blob/master/react-portfolio/src/components/pages/location.js",
        id: ""
      },
      {
        name: "Clicker Game",
        Description: "Click on the character to lvl up!",
        status: "Complete",
        link: "/projects/clicker",
        code:
          "https://github.com/jmjles/React_Portfolio/blob/master/react-portfolio/src/components/pages/clicker.js",
        id: ""
      },
      {
        name: "MERN Stack",
        Description: "You are using it :)",
        status: "Under Construction",
        link: "/",
        code: "https://github.com/jmjles/React_Portfolio",
        id: ""
      },
      {
        name: "WireFrame To HTML",
        Description: "Examples of me converting wireframes to html",
        status: "Under Construction",
        link: "/projects/wireframes",
        code: "",
        id: ""
      }
    ]
  };

  componentDidMount() {
    getStatus(this.state.projects, this);
  }
  render() {
    return (
      <article>
        <Container maxWidth="lg" align="center">
          <Font variant="h1">My Projects</Font>
          <Grid container spacing={5} justify="space-around">
            {this.state.projects.map(project => (
              <Grid key={project.name} item xs={12} md={4}>
                <Card elevation={10}>
                  <Font variant="h2">{project.name}</Font>
                  <Font variant="body1" align="left">
                    {project.Description}
                  </Font>
                  <Font>
                    Project Status
                    <br />
                    <b id={project.id}>{project.status}</b>
                  </Font>
                  <Button
                    variant="contained"
                    href={project.code}
                    target="blank"
                  >
                    <Font variant="button">Code</Font>
                  </Button>
                  <Button
                    variant="contained"
                    component={Link}
                    to={project.link}
                  >
                    Try Me
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </article>
    );
  }
}
export default Projects;
