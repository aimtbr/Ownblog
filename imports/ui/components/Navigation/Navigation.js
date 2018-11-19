import React from 'react';
import './navigation.css';
import AccountsUI from "../AccountsUI/AccountsUI";
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03"
                    aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <img className="navbar-brand img-fluid logo" src="no-img.png"/>
            <div className="navbar-collapse collapse" id="navbarsExample03">
                <ul className="navbar-nav mr-auto nav-main">
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/works">Works</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about">About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-collapse collapse dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <AccountsUI/>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation;