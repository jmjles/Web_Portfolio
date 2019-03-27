import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Clicker from '../pages/clicker';
import Location from '../pages/location';
import '../../App.css';

function Header(){
    return(
        <Router>
            <header className="container">
                <nav className="navbar nav-tab">
                    <p className="navbar-brand">Jesus Morales | <br/><lead className="lead">Fullstack Web Dev</lead></p>
                    <Link to="/" className="nav-link nav-item">Home</Link>
                    <Link to="/about" className="nav-link nav-item">About</Link>
                    <Link to="/projects" className="nav-link nav-item">Projects</Link>
                </nav>
            </header>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/projects/clicker" component={Clicker}/>
            <Route exact path="/projects/location" component={Location}/>
        </Router>
    )
}
export default Header;