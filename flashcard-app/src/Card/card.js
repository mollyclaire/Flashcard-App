import React, { Component } from "react";
import "./card.css";

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="question">Test</div>
            </div>
            <div className="back">
                <div className="answer">Answer</div>
            </div>
        </div>
        
    </div>
) 

export default Card;
