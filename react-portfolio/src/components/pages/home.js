import React from 'react';
import About from './about';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <section id="homePage">
            <article>
                <h1>
                    Welcome
                </h1>
                <hr/>
                <p>
                    I have always dreamed of being a Developer.<br/>
                    Creating things that came up in my mind was always a thrill to me and will always will be!<br/> 
                    Please enjoy exploring my website.<br/>
                    Thank you for your time and consideration.
                </p>
            <br/>
            <div id="btnCenter">
                <Link className="btn btn-primary btn-lg" to="/projects">Projects</Link>
            </div>
            </article>
            <About/>
      </section>
    )
}
export default Home;