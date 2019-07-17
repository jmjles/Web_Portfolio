import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Clicker from '../pages/clicker';
import Location from '../pages/location';
import linkedin from '../../assets/pics/linkedin-ico.png';
import github from '../../assets/pics/github-ico.png';
import udacity from '../../assets/pics/udacity-ico.png';
import phone from '../../assets/pics/phone.png';
import email from '../../assets/pics/email.png';
import anime from '../../../node_modules/animejs/lib/anime.es';

import '../../App.css';

function Header(){
    return(
        <Router>
            <header className="container-fluid text-center">
                <nav className="container nav nav-tabs">
                    <p className="navbar-brand">Jesus Morales |<span className="lead"> Fullstack Web Dev</span></p>
                    <Link to="/" className="nav-link nav-item">Home</Link>
                    <Link to="/projects" className="nav-link nav-item">Projects</Link>
                    <p className="nav-link nav-item" onClick={ani}>Socials</p>
                </nav>
                <div className="socials container">
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
        </Router>
    )
}
let i = 0;
function ani() {
    
    if (i === 0){
        anime({
            targets:'.socials',
            height:[0,50],
            easing: 'linear',
            duration: 300
        });
        /*anime({
            targets:'.social',
            height:[0,50],
            easing: 'linear',
            duration: 500
        });*/
        i++;
        console.log("i===0 result: "+ i);
        return(
        i
        )
    } else{
        anime({
            targets:'.socials',
            height: [50, 0],
            duration: 200,
            easing: 'linear'
        });
        /*anime({
            targets:'.social',
            height:[50,0],
            easing: 'linear',
            duration: 1000
        });*/
        i--;
        return(
            i
        )
    }
}
export default Header;