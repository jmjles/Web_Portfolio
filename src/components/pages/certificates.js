import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography as Font,
} from "@mui/material";
import { wave } from "../../assets";
import { education } from "../../utils";
import { sendClickEvent } from "../../utils/ga";
const certificates = () => {
  const certs = education;
  return (
    <Container component="article" className="CertificationRoot" id="education">
      <img src={wave.src} alt={wave.alt} className="Wave" />
      <div className="Title">
        <Font variant="h1" component="h1">
          Education
          <img src={education.src} alt={education.alt} />
        </Font>
      </div>

      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justifyContent={"space-around"}
          width={"100%"}
        >
          {certs.map((cert, i) => (
            <Grid
              key={cert.name}
              xs={12}
              md={6}
              lg={4}
              flexGrow={1}
              maxWidth={"310px"}
            >
              <Card elevation={0} className="GridCard Cert">
                <Paper elevation={0}>
                  <img className="GridImage" src={cert.img} alt={cert.alt} />
                  <Grid
                    container
                    justifyContent="space-between"
                    columnSpacing={2}
                    width={"100%"}
                  >
                    <Grid>
                      <Font component="h2" fontWeight="bold" color="secondary">
                        {cert.name}
                      </Font>
                    </Grid>
                    <Grid>
                      <Font color="GrayText">{cert.time}</Font>
                    </Grid>
                  </Grid>

                  <Font align="left">{cert.desc}</Font>
                  <Grid
                    container
                    justifyContent="end"
                    wrap="nowrap"
                    className="BottomCard"
                    spacing={2}
                    marginTop={"1rem"}
                  >
                    <Grid display={cert.info ? "revert" : "none"}>
                      <Button
                        variant="contained"
                        href={cert.info}
                        fullWidth
                        target="_blank"
                        color="primary"
                        rel="noopener"
                        name={`about ${cert.name}`}
                        onClick={() =>
                          sendClickEvent(`visited ${cert.name} website`)
                        }
                      >
                        <Font variant="button">Info</Font>
                      </Button>
                    </Grid>

                    <Grid>
                      <Button
                        variant="contained"
                        fullWidth
                        href={cert.link}
                        target="_blank"
                        disabled={!cert.link}
                        color="secondary"
                        rel="noopener"
                        name={`view ${cert.name}`}
                        onClick={() =>
                          sendClickEvent(`visited ${cert.name} diploma`)
                        }
                      >
                        <Font variant="button" noWrap>
                          {cert.link ? "Degree" : "Current"}
                        </Font>
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default certificates;
