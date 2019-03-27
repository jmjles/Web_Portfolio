import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <article className="container">
            <h1 className="display-3">
                Working for a Better Tomorrow
            </h1>
            <p>
                I have always dreamt of being a Developer.<br/>
                Creating things that came up in my mind was always a thrill to me and will always will be!<br/> 
                Thank you for your time.
            </p>
            <br/>
            <Link className="btn btn-primary btn-lg" to="/projects">Projects</Link>
      </article>
    )
}

export default Home;