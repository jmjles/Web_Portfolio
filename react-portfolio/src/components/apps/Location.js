import React from "react";
import {
  Container,
  Typography as Font,
  Button,
  Input,
  Card,
  Grid,
  styled,
  Paper
} from "@material-ui/core";

const Location = props => {
  const weather = () => (
    <div id="weather">
      <Font variant="h2">{props.weather.name}</Font>
      <Font variant="caption">{props.weather.weather}</Font>
      <Font variant="body1">{props.weather.temp}&#176;</Font>
    </div>
  );

  const CardNews = styled(Card)({
    "& div": {
      padding: "2rem",
      "& h3": {
        marginBottom: "2rem"
      },
      "& img": {
        width: "100%",
        height: "50vh",
        marginBottom: "2rem"
      }
    }
  });
  
  return (
    <Container component="article">
      <Font variant="h1" align="center">
        Location Lookup
      </Font>
      <form
        onSubmit={here => {
          here.preventDefault();
          props.click();
        }}
        style={{ textAlign: "center" }}
      >
        <Input placeholder="Enter A Place" id="PSearch" />
        <Button id="Search" type="submit" variant="outlined" color="primary">
          <Font variant="button">Search</Font>
        </Button>
      </form>
      <br />
      <Font variant="h1" id="place"></Font>
      <Font variant="caption">Local Time: {props.time}</Font>
      <div id="mw">
        {props.weather ? weather() : ""}
        <div id="map" style={{ height: "600px" }}></div>
      </div>
      <Grid container spacing={5} justify="space-around">
        {props.news.map(i => (
          <Grid item xs={12}>
            <CardNews id="article" elevation={5} align="center" key={i.title}>
              <Paper>
                <Font variant="h3">{i.title}</Font>
                <Font variant="body1" align="left">
                  {i.source} | {i.published}
                </Font>
                <img src={i.img} id="aImg" alt={i.title}></img>
                <Font variant="body1" align="left">
                  {i.snippet}
                </Font>
                <Button variant="contained" href={i.url} target="blank">
                  <Font variant="button">Learn More</Font>
                </Button>
              </Paper>
            </CardNews>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Location