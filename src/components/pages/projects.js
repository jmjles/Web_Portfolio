import React from "react";
import {
  Typography as Font,
  Grid,
  Card,
  Container,
  Button,
  Paper,
} from "@mui/material";
import { experiences } from "../../utils";
import { sendClickEvent } from "../../utils/ga";
export default function Projects() {
  const projects = experiences;
  return (
    <Container component="article" className="ProjectsRoot" id="experience">
      <Font variant="h1" className="Title">
        My Experience
      </Font>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          {projects.map((project, i) => {
            const right = i % 2 ? false : true;
            return (
              <Grid key={project.name} item>
                <Card elevation={0} className="GridCard">
                  <Paper elevation={0}>
                    <Grid
                      container
                      className={right ? "Right" : "Left"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        {project.svg ? (
                          project.svg
                        ) : (
                          <img
                            className="GridImage"
                            src={project.img}
                            alt={project.alt}
                          />
                        )}
                      </Grid>
                      <Grid item>
                        <Font
                          variant="h2"
                          component="h2"
                          fontWeight="bold"
                          marginBottom="6px"
                        >
                          {project.name}
                        </Font>
                        <Font
                          variant="body1"
                          align="left"
                          whiteSpace="pre-wrap"
                        >
                          {project.desc}
                        </Font>
                        <Grid container spacing={2} className="BottomCard">
                          {project.info ? (
                            <Grid item>
                              <Button
                                variant="contained"
                                href={project.info}
                                target="_blank"
                                color="primary"
                                rel="noopener"
                                onClick={() =>
                                  sendClickEvent(
                                    `visited ${project.name} website`
                                  )
                                }
                              >
                                <Font variant="button">Learn More</Font>
                              </Button>
                            </Grid>
                          ) : (
                            <>
                              <Grid item>
                                <Button
                                  variant="contained"
                                  href={project.code}
                                  onClick={
                                    !project.code
                                      ? () => alert("Private Repo")
                                      : () =>
                                          sendClickEvent(
                                            `visited ${project.name} github`
                                          )
                                  }
                                  target="_blank"
                                  color="primary"
                                  rel="noopener"
                                >
                                  <Font variant="button">Code</Font>
                                </Button>
                              </Grid>
                              <Grid item>
                                <Button
                                  variant="contained"
                                  href={project.link}
                                  target="_blank"
                                  color="secondary"
                                  rel="noopener"
                                  onClick={() =>
                                    sendClickEvent(
                                      `visited ${project.name} live example`
                                    )
                                  }
                                >
                                  <Font variant="button">Try Me</Font>
                                </Button>
                              </Grid>
                            </>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
}
