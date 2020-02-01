import React, { Component } from "react";
import { Link } from "react-router-dom";
import getStatus from "../apps/getStatus";
import {
  Typography as Font,
  Grid,
  Card,
  Container,
  Button,
  Paper,
  styled
} from "@material-ui/core";
class Projects extends Component {
  state = {
    projects: [
      {
        name: "Location Lookup",
        Description:
          "Get The latest news, weather and map of a location with a simple search.",
        status: "Complete",
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
    const statusColor = ({ id }) => {
      return id === "Good" ? { color: "green" } : { color: "red" };
    };
    const ProjectCard = styled(Card)({
      height: "350px",
      position: "relative",
      "& div": {
        padding: ".5rem",
        "& h3": {
          marginBottom: "1rem"
        },
        "& .bottomCard": {
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "100%",
          transform: "translate(-50%)",
          "& a": {
            marginLeft: "1rem"
          }
        }
      }
    });
    return (
      <Container maxWidth="lg" align="center" component="article">
        <Font variant="h1" style={{ marginBottom: "2rem" }}>
          My Projects
        </Font>
        <Grid container spacing={5} justify="space-around">
          {this.state.projects.map(project => (
            <Grid key={project.name} item xs={12} md={4}>
              <ProjectCard elevation={10}>
                <Paper elevation={0}>
                  <Font variant="h3">{project.name}</Font>
                  <Font variant="body1" align="left">
                    {project.Description}
                  </Font>
                  <div className="bottomCard">
                    <Font>
                      Project Status
                      <br />
                      <Font style={statusColor(project)}>{project.status}</Font>
                    </Font>
                    <Button
                      variant="contained"
                      href={project.code}
                      target="blank"
                      color='primary'
                    >
                      <Font variant="button">Code</Font>
                    </Button>
                    <Button
                      variant="contained"
                      component={Link}
                      to={project.link}
                      color='secondary'
                    >
                      <Font variant="button">Try Me</Font>
                    </Button>
                  </div>
                </Paper>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}
export default Projects;
