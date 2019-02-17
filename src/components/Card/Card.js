import React from "react";
import "./style.css";

function Card(props) {
    
    return (
        <button
        className="card"
        style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
        onClick={props.onClick}>
        </button>
    );
}

export default Card;
