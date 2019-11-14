import React, { Component } from 'react';
import {Container,Typography as Font,Button, Input, Card, Grid} from '@material-ui/core';

class location extends Component{
    render(){
        let p = this.props;
        return(
            <article>
              <Container>
                <Font variant='h1'>
                  Location Lookup
                </Font>
                <Input placeholder='Enter A Place' id="PSearch"/>
                <Button id="Search" onClick={p.click}>
                  <Font variant='button'>
                    Search
                  </Font>
                </Button>
                <br/>
                <Font variant='h1' id="place"></Font>
                <Font variant='caption'>Local Time: {p.time}</Font>
              <div id="mw">
                <div id="weather">
                  <Font variant='h2'>{p.weather.name}</Font>
                  <Font variant='caption'>{p.weather.weather}</Font>
                  <Font variant='body1'>{p.weather.temp}&#176;</Font>
                </div>
                <div id="map"></div>
            </div>
            <Grid container spacing={5} justify='space-around'>
              {p.news.map((i) => (
                <Grid item xs={12} >
                <Card  id="article" elevation={2} align='center' key={i.title}>
                  <Font variant='h3'>
                    {i.title}
                  </Font>
                  <Font variant='body1' align='left'>
                    {i.source} | {i.published}
                  </Font>
                  <img src={i.img} id="aImg" alt={i.title}></img>
                  <Font variant='body1' align='left'>
                    {i.snippet}
                  </Font>
                  <Button variant='contained' href={i.url} target='blank'>
                    <Font variant='button'>
                      Learn More
                    </Font>
                  </Button>
                </Card>
                </Grid>
              ))
              }
            </Grid>
            </Container>
        </article>
        );
    }
    
}

export default location;
