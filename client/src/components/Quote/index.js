import React from "react";
import "./style.css";

function Quote() {
    return (
        <div className="quote-container">

            <h1>""</h1>

            <hr></hr>
            <div className="rating-container">
                <h2>Rate It</h2>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>

            <hr></hr>
            <h2>Average Rating</h2>
            <div className="average-rating-container">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
        </div>
    )
};

export default Quote;