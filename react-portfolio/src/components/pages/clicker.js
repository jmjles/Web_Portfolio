import React, { Component } from "react";
import g from "../../assets/pics/ghoul.png";
import gh from "../../assets/pics/ghost.png";
import p from "../../assets/pics/pumpkin.png";
import Clicker from "../apps/Clicker";

class clicker extends Component {
  state = {
    Characters: [
      {
        name: "Ghoul",
        level: "Noob",
        url: g,
        clicks: 0,
        id: "1",
        alt: "Ghoul Character Pic"
      },
      {
        name: "Ghost",
        level: "Noob",
        url: gh,
        clicks: 0,
        id: "2",
        alt: "Ghost Character Pic"
      },
      {
        name: "Pumpkin",
        level: "Noob",
        url: p,
        clicks: 0,
        id: "3",
        alt: "Pumpkin Character Pic"
      }
    ],
    currentCharacter: {
      name: "Ghoul",
      level: "Noob",
      url: g,
      clicks: 0,
      id: "1",
      alt: "Ghoul Character Pic"
    }
  };
  clicked = id => {
    this.setState({
      Characters: this.state.Characters.map(character => {
        if (character.id === id) {
          character.clicks++;
          character.clicks <= 10
            ? (character.level = "Noob")
            : character.clicks <= 30
            ? (character.level = "Beginner")
            : character.clicks <= 60
            ? (character.level = "Amatuer")
            : character.clicks <= 100
            ? (character.level = "Adventurer")
            : character.clicks <= 150
            ? (character.level = "Thumping Rabbit")
            : character.clicks <= 200
            ? (character.level = "Pro")
            : character.clicks <= 300
            ? (character.level = "Tapping Ninja")
            : (character.level = "Godlike");
        }
        return character;
      })
    });
    this.setCharacter(id)
  };

  setCharacter = id => {
    this.state.Characters.map(character => {
      if (character.id === id) {
        this.setState({
          currentCharacter: character
        });
      }
      return character;
    });
  };
  render() {
    return (
      <Clicker
        characters={this.state.Characters}
        clicked={this.clicked}
        setCharacter={this.setCharacter}
        currentCharacter={this.state.currentCharacter}
      />
    );
  }
}
export default clicker;
