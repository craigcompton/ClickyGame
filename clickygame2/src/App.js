import React, { Component } from 'react';
import ClickCard from "./components/ClickCard";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    clickedCharacters: [],
    message: "Click on a Sith Lord to begin!"
  };

  // radomizes the cards
  handleShuffle = characters => {
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]]
    }
    return characters;
  }

  // updates the highest score
  handleHighScoreCheck = () => {
    if (this.state.currentScore >= this.state.highScore) {
      this.state.highScore = this.state.currentScore
    } else {
      this.state.highScore = this.state.highScore
    }
    return this.state.highScore
  }

  // selects the clicked character
  handleClick = id => {
    let clickedCharacters = this.state.clickedCharacters;

    // resets the game if a duplicate card is selected
    if (clickedCharacters.includes(id)) {
      this.setState({
        characters,
        clickedCharacters: [],
        currentScore: 0,
        highScore: this.handleHighScoreCheck(),
        message: "You clicked the same Sith Lord twice!  Begin again!"
      })
      this.handleShuffle(characters);
    }

    // when a card is selected correctly
    else {
      clickedCharacters.push(id)
      this.setState({
        characters,
        currentScore: clickedCharacters.length,
        message: "Click on a different Sith Lord!"
      })
      this.handleShuffle(characters);

      // if all cards are selected correctly
      if (clickedCharacters.length === 18) {
        this.setState({
          characters,
          currentScore: 0,
          highScore: 18,
          clickedCharacters: [],
          message: "You Win, search your feelings, you know it to be true!"
        })
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Nav
          title="Sith Lord Memory Game"
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Jumbotron
          message={this.state.message}
        />
        {this.state.characters.map(character => (
          <ClickCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
