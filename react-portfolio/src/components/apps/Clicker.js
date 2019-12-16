import React from "react";
import { charSelect, gameInfoAni } from "../animeGallery";
import { Container, Paper, Typography as Font, Fab, Button, makeStyles } from "@material-ui/core";
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
    headerPaper:{
        textAlign:'right',
        marginTop:'30px',
        '& button':{
            float:'right'
        }
    },
    gameInfo:{
        width:'0px',
        overflow:'hidden',
        zIndex:99,
        height:'100%',
        position:'absolute'
    }
  })
  const classes = styles();
  return (
    <Container component="article" id="fs">
      <Paper elevation={0} className={classes.headerPaper}>
        <Fab
          onClick={gameInfoAni}
          id="i"
        >
          ?
        </Fab>
        <Font align="center" variant="h1">
          Clicker Game
        </Font>
      </Paper>

      <div className={classes.gameInfo} id='gameInfo'>
        <Button
          variant="contained"
          onClick={gameInfoAni}
          className="gBack"
        >
          Back
        </Button>
        <Font variant="h1" align="center">
          Levels
        </Font>
        <table>
          <tbody>
            {characterTitles.map(config => (
              <tr key={config.title}>
                <td id="Ltitle">{config.title}</td>
                <td>{config.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="gameArea">
        <figure>
          <img
            id="gpicmain"
            src={props.currentCharacter.url}
            alt={props.currentCharacter.alt}
            onClick={props.clicked.bind(this, props.currentCharacter.id)}
          />
          <figcaption>
            <h2 className="text-center">{props.currentCharacter.name}</h2>
            <h3>{props.currentCharacter.clicks}</h3>
            <h4>{props.currentCharacter.level}</h4>
          </figcaption>
        </figure>
        <button
          onClick={reverse => {
            charSelect((reverse = false));
          }}
          className="btn btn-primary btn-lg"
        >
          Change Character
        </button>
      </div>
      <div id="charselect">
        <div id="Characters">
          <h2 className="two">Character Selection</h2>
          {props.characters.map(character => (
            <div id="charDiv" key={character.id}>
              <h1
                className="text-center"
                onClick={reverse => {
                  props.setCharacter.bind(this, character.id)();
                  charSelect((reverse = true));
                }}
              >
                {character.name}
              </h1>
              <img
                id="gpic"
                src={character.url}
                alt={character.alt}
                onClick={reverse => {
                  props.setCharacter.bind(this, character.id)();
                  charSelect((reverse = true));
                }}
              />
              <p>{character.level}</p>
            </div>
          ))}
          <button
            onClick={reverse => {
              charSelect((reverse = true));
            }}
            className="gBack"
            id="gbChar"
          >
            Back
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Clicker;
