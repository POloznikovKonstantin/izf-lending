import React from "react";
import './Card.css';

export const Card = ({nameHeader, description, placeHolder, imgLink, link, stack}) => {
    return(
        <div className='background-card'>
            <img src={imgLink} alt=''/>
            <div className='border-stack'>
                <p>{stack}</p>
            </div>
            <h4>{nameHeader}</h4>
            <p>{description}</p>
            <a className='button-link' href={link}>Open to GitHUB</a>
        </div>
    )
}