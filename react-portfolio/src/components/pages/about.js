import React from 'react';
import Resume from '../../assets/etc/Resume.pdf'
import Portrait from '../../assets/pics/portrait.jpg'
import anime from '../../../node_modules/animejs/lib/anime.es'
function About(){
    return(
        <article>
            <h1>
                A Little Bit About Me
            </h1>
            <hr/>
            <img id="portrait" src={ Portrait } alt="A portrait of Jesus M."/>
            <br/>
            <p>
                When I was a kid, I always loved building models and taking apart electronics.
            I started learning about all the hardware of computers when I was in middle school.<br/><br/><br/>
            One day, I signed up for two classes; one was focused on Adobe Suites and the other on Java.
            I was <b>in love</b> with the idea that could create virtually anything with a few lines of code.<br/><br/><br/>
            I came across Udacity as I was getting frustrated at the thought that the college I was attending didn't have any programming classes.
            I've decided to drop college and proceed my dreams of becoming a Full-Stack Developer!
            </p>
            <br/>
            <br/>
            <br/>
            <article>
                <h1>
                    My Resume
                </h1>
                <hr/>
                <button onClick={ani} className="btn-lg btn-primary" id="btnSH">Show</button>
                <a href={Resume} download="Jesus-Morales-Resume" className="btn-lg btn-primary" id="download">Download</a>
                <br/>
                <br/>
                <object className="pdf"data={Resume} type="application/pdf" width="100%" height="0">
                <embed src={Resume} type="application/pdf"/>
                </object>
            </article>
        </article>
    )
}
let i = 0;
function ani() {
    
    if (i === 0){
        anime({
            targets:'.pdf',
            height: [0, 1200],
            duration: 3000,
            easing: 'linear'
        });
        i++;
        document.getElementById('btnSH').innerHTML='Hide';
        return(
        i
        )
    } else{
        anime({
            targets:'.pdf',
            height: [1200, 0],
            duration: 3000,
            easing: 'linear'
        });
        i--;
        document.getElementById('btnSH').innerHTML='Show';
        return(
            i
        )
    }
}
export default About;