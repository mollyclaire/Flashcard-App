import React, { Component } from "react";
import './App.css';
import Card from "./Card/card";
import Button from "./Button/button";
import firebase from "firebase/app";
import "firebase/database";

import { DB_CONFIG } from "./Config/Firebase/db_config";


class App extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child("cards");

    this.updateCard = this.updateCard.bind(this);

    this.state = {
    cards: [],
    currentCard: {}
  }
}

  componentDidMount() {
    const currentCards = this.state.cards;
    this.database.on("child_added", snap => {
      currentCards.push({
        id: snap.key,
        question: snap.val().question,
        answer: snap.val().answer
      })
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
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
