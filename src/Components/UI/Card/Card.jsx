import React from "react";
import './Card.css';
import { useTransform } from "framer-motion";

export const Card = ({nameHeader, description, placeHolder, imgLink, link, stack}) => {

    return(
        <div className='background-card'>
            <div className='image-project'>
                <img src={imgLink} alt='Какая картинка'/>
            </div>
            <div className='border-stack'>
                <p>{stack} Стак разработки </p>
            </div>
            <h1>{nameHeader} Название проекта </h1>
            <div className='description-card'>
                <p>{description} Краткое описание проекта о какой-то штуке</p>
            </div>
            <div className="footer-card">
                <a className='button-link' href={link}>{placeHolder}Open to GitHUB</a>
            </div>
        </div>
    )
}