import React from "react";
import { charSelect, gameInfoAni } from "../animeGallery";
import {
  Container,
  Paper,
  Typography as Font,
  Fab,
  Button,
  makeStyles,
  Grid
} from "@material-ui/core";
const Clicker = props => {
  const characterTitles = [
    {
      title: "Beginner:",
      count: "10"
    },
    {
      title: "Amatuer:",
      count: "30"
    },
    {
      title: "Adventurer:",
      count: "60"
    },
    {
      title: "Thumping Rabbit:",
      count: "100"
    },
    {
      title: "Pro:",
      count: "150"
    },
    {
      title: "Tapping Ninja:",
      count: "200"
    },
    {
      title: "GodLike:",
      count: "300"
    }
  ];
  const styles = makeStyles({
    headerPaper: {
      textAlign: "right",
      marginTop: "30px",
      "& button": {
        float: "right"
      }
    },
    gameInfo: {
      width: "0px",
      overflow: "hidden",
      zIndex: 99,
      height: "100%",
      position: "absolute",
      backgroundColor: "lightgrey",
      top: 0,
      left: 0,
      textAlign: "center"
    },
    gameArea: {
      textAlign: "center",
      "& img": {
        width: "300px"
      }
    },
    characterSelect: {
      width: "0px",
      height: "100%",
      overflow: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      textAlign: "center",
      backgroundColor: "lightgrey",
      "& img": {
        width: "90%",
        height: "100%"
      },
      "& div": {
        marginBottom:'3rem',
        "& div": {
          margin: "3rem",
          padding: "2rem"
        }
      }
    }
  });
  const classes = styles();
  return (
    <Container component="article" id="fs">
      <Paper elevation={0} className={classes.headerPaper}>
        <Fab onClick={gameInfoAni} id="i">
          ?
        </Fab>
        <Font align="center" variant="h1">
          Clicker Game
        </Font>
      </Paper>

      <div className={classes.gameInfo} id="gameInfo">
        <Font variant="h1" align="center">
          Levels
        </Font>
        <table style={{ margin: "auto" }}>
          <tbody>
            {characterTitles.map(config => (
              <tr
                key={config.title}
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <td id="Ltitle" style={{ padding: ".5rem" }}>
                  <Font variant="body1">{config.title}</Font>
                </td>
                <td style={{ padding: ".5rem" }}>
                  <Font variant="body1">{config.count}</Font>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button variant="contained" onClick={gameInfoAni} className="gBack">
          <Font variant="button">Back</Font>
        </Button>
      </div>

      <div className={classes.gameArea}>
        <figure>
          <img
            id="gpicmain"
            src={props.currentCharacter.url}
            alt={props.currentCharacter.alt}
            onClick={props.clicked.bind(this, props.currentCharacter.id)}
          />
          <figcaption>
            <Font variant="h2">{props.currentCharacter.name}</Font>
            <Font variant="h3">{props.currentCharacter.clicks}</Font>
            <Font variant="h4">{props.currentCharacter.level}</Font>
          </figcaption>
        </figure>
        <Button
          onClick={() => {
            charSelect(false);
          }}
          variant="contained"
        >
          <Font variant="button">Change Character</Font>
        </Button>
      </div>

      <div className={classes.characterSelect} id="characterSelect">
        <Font variant="h2" align="center" className="two">
          Character Selection
        </Font>
        <Grid container justify="space-around">
          {props.characters.map(character => (
            <Grid item id="charDiv" key={character.id} md={3}>
              <Font
                align="center"
                variant="h3"
                className="text-center"
                onClick={() => {
                  props.setCharacter.bind(this, character.id)();
                  charSelect(true);
                }}
              >
                {character.name}
              </Font>
              <img
                id="gpic"
                src={character.url}
                alt={character.alt}
                onClick={() => {
                  props.setCharacter.bind(this, character.id)();
                  charSelect(true);
                }}
              />
              <Font variant="h4" align="center">
                {character.level}
              </Font>
            </Grid>
          ))}
        </Grid>
        <Button
          onClick={() => {
            charSelect(true);
          }}
          variant="contained"
        >
          <Font variant="body1">Back</Font>
        </Button>
      </div>
    </Container>
  );
};
export default Clicker;
