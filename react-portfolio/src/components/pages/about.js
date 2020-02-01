import React from "react";
import Portrait from "../../assets/pics/portrait.jpg";
import { Container, Typography as Font } from "@material-ui/core";
function About() {
  return (
    <Container component="article">
      <Font variant="h1" align="center">
        A Little Bit About Me
      </Font>
      <hr />
      <img id="portrait" src={Portrait} alt="A portrait of Jesus M." />
      <Font variant="body1">
        When I was a kid, I always loved building models and taking apart
        electronics. I started learning about all the hardware of computers when
        I was in middle school.
      </Font>
      <Font variant="body1">
        One day, I signed up for two classes; one was focused on Adobe Suites
        and the other on Java. I was <b>in love</b> with the idea that could
        create virtually anything with a few lines of code.
      </Font>
      <Font variant="body1">
        I came across Udacity as I was getting frustrated at the thought that
        the college I was attending didn't have any programming classes. I've
        decided to drop college and proceed my dreams of becoming a Full-Stack
        Developer!
      </Font>
    </Container>
  );
}
export default About;
