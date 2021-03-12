import React from "react";
import {
  Typography as Font,
  Grid,
  Card,
  Container,
  Button,
  Paper,
} from "@material-ui/core";
import { showResp } from "../animeGallery";
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
  mongo,
  connys,
} = require("../../assets/index");
export default function Projects() {
  function Project(name, img, alt, desc, resp, status, link, code, stack) {
    this.name = name;
    this.img = img;
    this.alt = alt;
    this.desc = desc;
    this.resp = resp;
    this.status = status;
    this.link = link;
    this.code = code;
    this.stack = stack;
  }

  const AlbionOnlineTool = new Project(
    "Albion Online Tool",
    albionOnlineTool.src,
    albionOnlineTool.alt,
    "React Native App utilizing API's to display in-game data.",
    [
      "Worked with Axios to communicate with third party API",
      "Created a simple design using jsx",
      "Deployed the app to the Google Play Store",
    ],
    "Under Construction",
    "https://play.google.com/store/apps/details?id=com.jmjles.albiononlinetool",
    "https://github.com/jmjles/albion-online-tool",
    [html, css, js]
  );

  const MLSRoofing = new Project(
    "MLS Roofing",
    mls.src,
    mls.alt,
    "Roofing company website with an managment tool.",
    [
      "Worked with Next.js and Sass for the front-end",
      "Used Express/Node to construct a Restful api",
      "Used MongoDB for the database",
    ],
    "Under Construction",
    "https://mlsroofing.com",
    undefined,
    [html, js, react, sass, mongo]
  );
  const Connys = new Project(
    "Connys Beauty Salon",
    connys.src,
    connys.alt,
    "Beauty Salon website with an apointment managment system.",
    [
      "Worked with Next.js and Sass for the front-end",
      "Used Express/Node to construct a Restful api",
      "MongoDb is used for the database",
    ],
    "Under Construction",
    "https://connysbeautysalon.com",
    undefined,
    [html, js, react, sass, mongo]
  );
  const projects = [MLSRoofing, Connys, AlbionOnlineTool];

  return (
    <Container
      maxWidth="xl"
      component="article"
      className="ProjectsRoot"
      id="projects"
    >
      <Font variant="h2" component="h1">
        My Projects
      </Font>
      <Grid container spacing={5} justify="space-around">
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
                <Font
                  variant="subtitle1"
                  color="secondary"
                  onClick={() => showResp(i)}
                >
                  What did I do?
                </Font>
                <ul id={`ul${i}`}>
                  {project.resp.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>

                <div className="BottomCard">
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
