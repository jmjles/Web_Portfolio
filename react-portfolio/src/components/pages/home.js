import React from 'react';
import About from './about';
import {Link} from 'react-router-dom';
import { Container,Typography as Font, Button } from '@material-ui/core';

function Home(){
    return(
        <article>
            <Container align='center' maxWidth='sm'>
                <Font variant='h1'>
                    Welcome
                </Font>
                <Font variant='body1' align='left'>
                    I have always dreamed of being a Developer.<br/>
                    Creating things that came up in my mind was always a thrill to me and will always will be!<br/> 
                    Please enjoy exploring my website.<br/>
                    Thank you for your time and consideration.
                </Font>
                <br/>
                <Button variant='contained' component={Link} to="/projects" >
                    <Font variant='button'>
                        Projects
                    </Font>
                </Button>
            </Container>
        </article>
    )
}
export default Home;