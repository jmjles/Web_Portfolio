import React, { Component } from 'react';

class Location extends Component{
    state = {

    }
    render(){
        return(
            <article className="Location, container">
                <h1>
                    Location Lookup
                </h1>
                <div>
                    <input type="text" placeholder="Enter A Place" id="PSearch" size="30px;"/>
                    <button id="Search" className="btn-default btn">
                    Search
                    </button>
                    <br/>
                    <h1 id="place"></h1>
                    <div id="ltime">
                    Local Time:<span id ="localtime"></span>
                    </div>
                </div>
                <div id="mw">
                    <div id="map"></div>
                    <div id="weather"></div>
                </div>
                <div id="theeinfoarea"></div>
            </article>
        )
    }
}

export default Location;