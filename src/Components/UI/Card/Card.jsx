import React from "react";
import './Card.css';

export const Card = (nameHeader, description, placeHolder, imgLink, link, stack) => {
    return(
        <div className="Background-Card">
            <img src={imgLink} alt=""></img>
            <div className="Border-Stack">
                <p>{stack}</p>
            </div>
            <h4>{nameHeader}</h4>
            <p>{description}</p>
            <a href={link}>{placeHolder}</a>
        </div>
    )
}