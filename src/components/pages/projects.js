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
        <Grid container justifyContent="center" spacing={12}>
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
                      <Grid item className="GridImage" alignItems="center">
                        {project.svg ? (
                          project.svg
                        ) : (
                          <img src={project.img} alt={project.alt} />
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
                        <Grid container spacing={8} className="BottomCard">
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
                                My Contribution
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
                                  Code
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
                                  <Font variant="button" alignSelf="center">
                                    Try Me
                                  </Font>
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
