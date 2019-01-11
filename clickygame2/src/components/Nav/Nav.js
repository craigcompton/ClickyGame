import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item">Current Score: {props.currentScore} | High Score: {props.highScore}</li>

            </ul>
        </div>
    </nav>
)

export default Nav;