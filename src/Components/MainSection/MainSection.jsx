import React from 'react';
import { useTranslation } from 'react-i18next';


import './MainSection.css';
import {
    MainBGImage, hwu, innoplisUn, personLarge, rosneft, schlumberger, tatneft, tpy, vector
} from '../../assets';


export const MainSection = () => {
    const {t} = useTranslation();

    return (
        <section className='main-section'>
            <img className='main-section__img' src={MainBGImage} alt='' />

            <div className='main-section__content'>

                <article>
                    <p className='main-section__subtitle'>
                        Machine Learning 
                        <span> &</span> Data Science <span> @</span>
                    </p>

                    <p className='header-text'>
                        Geology, <br/>
                        Geophysics and <br/>
                        Petroleum Engineering<br/>
                    </p>

                    <div className='main-section__logo-set'>
                        <div className='main-section__logo-item1'>
                            <img src={tpy} alt=''/>
                            <img className='main-section__logo-item1-i2' src={hwu} alt=''/>
                            <img className='main-section__logo-item1-i3' src={innoplisUn} alt=''/>
                        </div>

                        <div className='main-section__logo-item2'>
                            <img src={schlumberger} alt='4'/>
                            <img src={rosneft} alt=''/>
                            <img src={tatneft} alt=''/>
                        </div>
                    </div>
                </article>

                <div className='main-section__conten-img'>
                    <img src={personLarge} alt=''/>
                    <div className='main-section__quote'>
                        <p className='main-section__quote-p'>
                            {t('SectionHome.Quote')}
                        </p>

                        <div className='main-section__author'>
                            <img src={vector} alt='vector'/>
                            <p className='main-section__author-p'>
                                {t('SectionHome.Author')}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
