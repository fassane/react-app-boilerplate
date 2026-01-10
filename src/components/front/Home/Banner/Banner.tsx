import React from 'react';
import "./Banner.scss";


const Banner = () => {
    return (
        <div className="home_banner__wrapper">
            <div className="banner">
                <div className="container">
                    <h1 className="banner-title">
                        Bienvenue chez Boilerplate
                    </h1>
                </div>
            </div>
            <div className="custom_banner">
                <div className="container">
                    <div className="grid grid-cols-2 gap-4 row__daily_courses__home_and_advertisement">
                        <div className="col-md-6">
                            <div className="custom_card daily_courses">
                                <div className="custom_card__left">
                                    <h5 className="title">
                                        Courses du quotidien
                                    </h5>
                                    <div className="description">
                                        Retrait gratuit en drive ou livrées chez vous en 1h
                                    </div>
                                    <div className="btn_container pt-4">
                                        <button className="btn custom_btn">Faire mes courses</button>
                                    </div>
                                </div>
                                <div className="custom_card__right daily_courses__illustration" />
                            </div>
                        </div>
                        <div className="col-md-6 card_wrapper">
                            <div className="custom_card home_and_advertisement">
                                <div className="custom_card__left">
                                    <h5 className="title">
                                        Maison & loisirs
                                    </h5>
                                    <div className="description">
                                        Retrait magasin gratuit, livraison gratuite <strong>dès 30€ d’achat</strong>
                                    </div>
                                    <div className="btn_container pt-4">
                                        <button className="btn custom_btn">Découvrir</button>
                                    </div>
                                </div>
                                <div className="custom_card__right home_and_advertisement__illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;