import React, { Component } from "react";
import './App.css';
import Card from "./Card/card";
import Button from "./Button/button";


class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
    cards: [
      {question: "hi", answer: "bye"},
      {question: "hello", answer: "goodbye"}

    ],
    currentCard: {}
  }
}

  componentDidMount() {
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return (card);
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <Card 
        question={this.state.currentCard.question}
        answer={this.state.currentCard.answer}
        />
        <Button 
        drawCard={this.updateCard}
        />
      </div>
    );
  }
}

export default App;
