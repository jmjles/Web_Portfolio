import React, { Component } from 'react';

class location extends Component{
    render(){
        let p = this.props;
        return(
            <article className="Location, container">
            <h1>
                Location Lookup
            </h1>
            <div>
                <input type="text" placeholder="Enter A Place" id="PSearch" size="30px;"/>
                <button id="Search" onClick={p.click}>
                Search
                </button>
                <br/>
                <h1 id="place"></h1>
                <div id="ltime">
                Local Time: {p.time}
                </div>
            </div>
              <div id="mw">
                <div id="weather">
                  <h2>{p.weather.name}</h2>
                  <h3>{p.weather.weather}</h3>
                  <p>{p.weather.temp}&#176;</p>
                </div>
                <div id="map"></div>
            </div>
            <div id="newsarea">
              {p.news.map((i) => (
                <div key={i.title} id="article">
                  <h1 id="aTitle">{i.title}</h1>
                  <p id="source">{i.source}<span id="aDate">{i.published}</span></p>
                  <img src={i.img} id="aImg" alt={i.title}></img>
                  <p id="aDesc">{i.snippet}</p>
                  <a href={i.url}>Learn More</a>
                </div>
              ))
              }
            </div>
        </article>
        );
    }
    
}

export default location;
