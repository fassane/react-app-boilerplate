import "./FrontHeader.scss";
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown, MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";



const FrontHeader = () => {
    return (
        <header className="front__header fixed-top">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid header-content">
                    <NavLink className="navbar-brand logo" to="/">
                        <img 
                            src="/logo.png" 
                            alt="logo" 
                        />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link link_item {{ Route::is('shop') ? 'active' : '' }}" aria-current="page" href="/boutiques">
                                Boutiques
                            </a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link link_item {{ Route::is('product') ? 'active' : '' }}" href="/produits">
                                Produits
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_item" href="#">
                                Occasions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link_item" href="#">
                                Features
                            </a>
                        </li>
                        </ul>
                        <div className="head_side ">
                            <NavLink 
                                className="btn header__login_btn"
                                to="/login"
                            >
                                Je me connecte
                            </NavLink>
                            <div className="cart_container">
                                <span>
                                    <MdOutlineShoppingCart />
                                </span>
                                Panier
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default FrontHeader;