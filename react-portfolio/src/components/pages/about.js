import React from 'react';
import Resume from '../../assets/etc/Resume.pdf'
import Portrait from '../../assets/pics/portrait.jpg'
function About(){
    return(
        <article className="container">
            <h1 className="display-1">
                A Little Bit About Me
            </h1>
            <hr/>
            <img id="portrait" src={ Portrait }/>
            <p>
                When I was a kid, I always loved building models and taking apart electronics.
            I started learning about all the hardware of computers when I was in middle school.<br/><br/><br/>
            One day, I signed up for two classes; one was focused on Adobe Suites and the other on Java.
            I was <b>in love</b> with the idea that could create virtually anything with a few lines of code.<br/><br/><br/>
            I came across Udacity as I was getting frustrated at the thought that the college I was attending didn't have any programming classes.
            I've decided to drop college and proceed my dreams of becoming a Full-Stack Developer!
            </p>
            <br/>
            <h2 className="display-2">
                My Resume
            </h2>
            <hr/>
            <object data={Resume} type="application/pdf" width="100%" height="1200">
            <embed src={Resume} type="application/pdf"/>
            </object>
        </article>
    )
}

export default About;