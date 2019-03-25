import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Header(){
    return(
    <header className="container">
        <nav className="navbar nav-tab">
            <p className="navbar-brand">Jesus Morales | <br/><lead className="lead">Fullstack Web Dev</lead></p>
            <a href="#" className="nav-link nav-item">Home</a>
            <a href="#" className="nav-link nav-item">About</a>
            <a href="#" className="nav-link nav-item">Projects</a>
        </nav>
    </header>
    )
}
export default Header;