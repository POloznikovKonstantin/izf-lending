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
                <p className="paragraph-text">{`Stack ${stack}`}</p>
            </div>
            <h4 className="subtitle-text">{nameHeader} Название проекта </h4>
            <div className='description-card'>
                <p className="paragraph-text">{description} Краткое описvgdbhvs bvjdhsvjssdvsdvs dvsdvsdvdsvsdvv svsddvsdvsdv svdsvsvsdvsd vsvdsvdgsd hvbsjdv bvjbds hvsavhjsvdание проекта о какой-то штуке</p>
            </div>
            <div className="footer-card">
                <a className='button-link' href={link}>{placeHolder}Open to GitHUB</a>
            </div>
        </div>
    )
}