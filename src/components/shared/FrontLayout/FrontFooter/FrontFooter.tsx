import React from 'react';
import "./FrontFooter.scss";
import { Link, NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const FrontFooter = () => {
    let date = new Date();
    return (
        <footer className="custom__footer">
            <div className="footer_head">

            </div>
            <div className="main_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-xs-6 society">
                            <NavLink className="logo" to="/">
                                <img 
                                    src="/logo.png" 
                                    alt="" 
                                />
                            </NavLink>
                        </div>
                        <div className="col-md-4 col-xs-3 about">
                            <h3 className="title">
                                A propos de Boilerplate
                            </h3>
                            <div className="content">
                                Atteignez de nouveaux clients et développez votre 
                                entreprise. Nous offrons aux vendeurs la possibilité 
                                de disposer d'une boutique sur notre Marketplace. 
                                Découvrez d'inombrables articles de sélection unique.
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-3 help">
                            <h3 className="title">
                                Obtenir de l'aide
                            </h3>
                            <p><a className="" href="#">Conditions Générales d'utilisation</a></p>
                            <p><a className="" href="#">Politiques et confidentialité</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_foot">
                © { date?.getFullYear() } fassane Inc.
            </div>
        </footer>
    )
}

export default FrontFooter