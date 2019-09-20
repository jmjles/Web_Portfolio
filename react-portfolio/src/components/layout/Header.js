import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Clicker from '../pages/clicker';
import Location from '../pages/location';
import wireframes from '../pages/wireframemenu';

import linkedin from '../../assets/pics/linkedin-ico.png';
import github from '../../assets/pics/github-ico.png';
import udacity from '../../assets/pics/udacity-ico.png';
import phone from '../../assets/pics/phone.png';
import email from '../../assets/pics/email.png';

import ani from '../animeGallery'
import '../../App.css';

function Header(){
    return(
        <Router>
            <header className="text-center">
                <nav className="nav nav-tabs">
                    <p className="navbar-brand" id="desc">Jesus Morales <i>| Fullstack Web Dev</i></p>
                    <div>
                        <Link to="/" className="nav-link nav-item">Home</Link>
                        <Link to="/projects" className="nav-link nav-item">Projects</Link>
                        <p className="nav-link nav-item" id="Socailbtn" onClick={(e,reverse)=>{let x= document.getElementsByClassName('socials')[0].clientHeight;if(x > 1){reverse= true};ani.socialAni(reverse)}}>Socials</p>
                    </div>
                    </nav>
                <div className="socials">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/jesus-morales/" target="_blank" rel="noopener noreferrer">
                                <img className="social" src={linkedin} alt="LinkedIn"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://confirm.udacity.com/QTXW5D2Q" target="_blank" rel="noopener noreferrer">
                                <img className="social" src={udacity} alt="Udacity"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/jmjles" target="_blank" rel="noopener noreferrer">
                                <img className="social" src={github} alt="Github"/>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+8058259190">
                                <img className="social" src={phone} alt="Phone"/>
                            </a>
                        </li>
                        <li>
                            <a href="mail:jmjles@gmail.com">
                                <img className="social" src={email} alt="Email"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/projects/clicker" component={Clicker}/>
            <Route exact path="/projects/location" component={Location}/>
            <Route exact path="/projects/wireframes" component={wireframes}/>
        </Router>
    )
}
export default Header;