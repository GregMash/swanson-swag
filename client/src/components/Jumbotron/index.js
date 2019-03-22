import React from "react";
import Ron from "../Images/Ron-Swanson.png";
import "./style.css";


function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Swanson-Swag</h1>
            <p className="lead">View words of wisdom from Ron Swanson. Rate each between 1 and 5 stars.</p>
            <hr></hr>
            <div className="ron-container">
                <h3>Click on Ron to gain his wisdom...</h3>
                <img id="ron" src={Ron} alt="Ron Swanson"></img>
            </div>
            <div className="quote-size-container">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                    <label className="form-check-label" for="inlineCheckbox1">Small (4 words or less)</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1"></input>
                    <label className="form-check-label" for="inlineCheckbox2">Medium (5-12 words)</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1"></input>
                    <label className="form-check-label" for="inlineCheckbox3">Large (13 or more words)</label>
                </div>
            </div>
        </div>
    )
};

export default Jumbotron;