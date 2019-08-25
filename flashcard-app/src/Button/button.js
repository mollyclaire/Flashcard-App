import React, { Component } from "react"; 
import "./button.css";

class Button extends Component {
    constructor(props) {
        super(props);
    // "this" needs to be defined (in order to be used in the onClick method below) 
    // and of course, represents our Button component
    this.drawCard = this.drawCard.bind(this);
    }

    // I just want to update the state of App.js to get a new random card when the state is updated.
    // So I will pass this method down on props and pass it on the button compenent in App.js.
    // The onClick function will fire the drawCard method in App.js.
    drawCard() {
        this.props.drawCard();
    }
    render(props) {
        return (
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>Draw Card</button>
            </div>
        )
    }
}

export default Button;