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
        <Grid container spacing={5} justify="center">
          {certs.map((cert, i) => (
            <Grid key={cert.name} item xs={12} sm={6} md={4}>
              <Card elevation={0} className="GridCard Cert">
                <Paper elevation={0}>
                  <img className="GridImage" src={cert.img} alt={cert.alt} />
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Font component="h2" fontWeight="bold" color="secondary">
                        {cert.name}
                      </Font>
                    </Grid>
                    <Grid item sx={{ marginLeft: "auto" }}>
                      <Font color="GrayText" variant="body1">
                        {cert.time}
                      </Font>
                    </Grid>
                  </Grid>

                  <Font variant="body1" align="left">
                    {cert.desc}
                  </Font>
                  <Grid
                    container
                    direction="row"
                    justifyContent="end"
                    wrap="nowrap"
                    className="BottomCard"
                  >
                    <Grid item>
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

                    <Grid item>
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
