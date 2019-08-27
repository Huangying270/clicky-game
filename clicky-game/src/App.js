import React from "react";
import "./App.css";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";

class App extends React.Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    };
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert("Game Over");
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((res, data) => {
      if (res.id === id) {
        if (cards[data].count === 0) {
          cards[data].count = cards[data].count + 1;
          this.setState({score: this.state.score + 1}, function() {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.endGame();
        };
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
          clickCount={this.clickCount}
          id={card.id}
          key={card.id}
          image={card.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
