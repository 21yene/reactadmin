import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>               
        <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg stroke">
                    <h1>
                        <Link className="navbar-brand mr-lg-5" to="/">
                            <img src="assets/images/logo.png" alt="AMB" title="AMB" />
                            የወንጌላዊ አለምነህ ጀንበሩ ማስታወሻ
                        </Link>
                    </h1>

                    <button
                        className="navbar-toggler collapsed bg-gradient"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav w-100">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/photos">
                                    Photos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                       
                            <li className="align-self">
                                <Link to="/donate" className="btn btn-style btn-primary ml-lg-3 mr-lg-2">
                                    <span className="fa fa-heart mr-1"></span> Donate
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-position">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="mode-container">
                                        <i className="gg-sun"></i>
                                        <i className="gg-moon"></i>
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                </nav>
            </div>
        </header>
    </div>
  );
}

export default Navbar;
