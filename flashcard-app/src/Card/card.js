import React from "react";
import "./card.css";

// In App.js, I will pass Card a piece of data that represents an indiviual card 
// (that I will get back from Firebase). The data that I will pass the card will be on props. 

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="question">{props.question}</div>
            </div>
            <div className="back">
                <div className="answer">{props.answer}</div>
            </div>
        </div>
        
    </div>
) 

export default Card;
