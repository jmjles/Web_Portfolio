import {
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography as Font,
} from "@material-ui/core";
import { lambda as la, udacity as uda } from "../../assets";
const certificates = () => {
  class Cert {
    constructor({ name, img, desc, info, link, alt }) {
      this.name = name;
      this.img = img;
      this.desc = desc;
      this.info = info;
      this.link = link;
      this.alt = alt;
    }
  }
  const lambda = new Cert({
    name: "Lambda School",
    desc: "Completed Lambda School's course in Full Stack Web Development and Technical Interview course.",
    link: "https://www.credly.com/badges/f8cd25ed-aba2-4da6-bdd7-d0daf472fc27?source=linked_in_profile",
    info: "https://lambdaschool.com/courses/full-stack-web-development",
    img: la.src,
    alt: la.alt,
  });
  const udacity = new Cert({
    name: "Udacity",
    desc: "Started my Web Development education with Udacity that taught me the fundamental core for web development and computer science.",
    link: "https://graduation.udacity.com/confirm/QTXW5D2Q",
    info: "https://www.udacity.com/nanodegree",
    img: uda.src,
    alt: uda.alt,
  });
  const certs = [lambda, udacity];
  return (
    <Container
      component="article"
      className="CertificationRoot"
      id="certifications"
    >
      <Font variant="h2" component="h1">
        Certifications
      </Font>
      <Container maxWidth="lg">
        <Grid container spacing={5} justify="center">
          {certs.map((cert, i) => (
            <Grid key={cert.name} item xs={12} sm={6} md={4}>
              <Card elevation={10} className="ProjectCard">
                <Paper elevation={0}>
                  <Font variant="h4" component="h2">
                    {cert.name}
                  </Font>
                  <hr />
                  <img className="ProjectImage" src={cert.img} alt={cert.alt} />
                  <Font variant="body1" align="left">
                    {cert.desc}
                  </Font>
                  <div className="BottomCard">
                    <Button
                      variant="contained"
                      href={cert.info}
                      target="_blank"
                      color="primary"
                      rel="noopener"
                    >
                      <Font variant="button">About Program</Font>
                    </Button>
                    <Button
                      variant="contained"
                      href={cert.link}
                      target="_blank"
                      color="secondary"
                      rel="noopener"
                    >
                      <Font variant="button">View</Font>
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
};

export default certificates;
