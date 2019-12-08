import React from 'react';
import About from './about';
import {Link} from 'react-router-dom';
import { Container,Typography as Font, Button, Card,makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    homeRoot:{
        top:'30%',
        left:'50%',
        position:'absolute',
        transform:'translate(-50%,-30%)',
        '& div':{
            padding:'2rem'
        }
    }
})


function Home(){
    const classes = useStyles();
    return(
        <Container align='center' maxWidth='sm' component='article'>
            <Card elevation={5} className={classes.homeRoot}>
                <Paper>
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
                </Paper>
            </Card>
        </Container>
    )
}
export default Home;