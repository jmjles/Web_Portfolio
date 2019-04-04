import React from 'react';
import About from './about';
import Contact from '../layout/Contact'
import {Link} from 'react-router-dom';

function Home(){
    return(
        <article className="container" id="section">
        <section>
            <h1 className="display-3">
                Working for a Better Tomorrow
            </h1>
            <hr/>
            <p>
                I have always dreamt of being a Developer.<br/>
                Creating things that came up in my mind was always a thrill to me and will always will be!<br/> 
                Thank you for your time.
            </p>
            <br/>
        </section>
            <Link className="btn btn-primary btn-lg" to="/projects">Projects</Link>
            <About/>
      </article>
    )
}

export default Home;