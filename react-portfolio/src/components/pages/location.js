import React, { Component } from "react";
import GoogleMapsLoader from "google-maps";
import apiURL from "../config/url";
import Locate from "../apps/Location";
const $ = require("jquery");
const axios = require("axios");

class Location extends Component {
  state = {
    time: "",
    weather: "",
    news: [],
    keys: {},
    map: {}
  };

  async componentDidMount() {
    const res = await axios.get("/api");
    this.setState({ keys: res.data });
    let gkey = this.state.keys.google;

    //* Google Maps
    GoogleMapsLoader.KEY = gkey;
    GoogleMapsLoader.VERSION = "3.39";
    await GoogleMapsLoader.load(google => {
      let options = {
        center: { lat: 40, lng: -100 },
        scrollwheel: false,
        zoom: 5
      };

      this.setState({
        map: new google.maps.Map(document.getElementById("map"), options)
      });
    });
  }

  locate = async () => {
    let area = $("#PSearch").val();
    // Global Variables
    let map = this.state.map;
    let thetime;
    let ftime;

    //keys and urls
    const googleKey = this.state.keys.google;
    const timeKey = this.state.keys.time;
    const newsKey = this.state.keys.news;
    const weatherKey = this.state.keys.weather;
    //clear news
    this.setState({ news: [] });

    //* Google Api

    let res = await axios.get(apiURL.google, {
      params: {
        address: area,
        key: googleKey
      }
    });
    let data = res.data;
    let name;
    name = data.results[0].address_components[0].long_name;
    const arealat = data.results[0].geometry.location.lat;
    const arealing = data.results[0].geometry.location.lng;

    let zoom;
    data.results[0].types[0] === "locality" ? (zoom = 10) : (zoom = 5);

    GoogleMapsLoader.load(function(google) {
      map.setCenter(new google.maps.LatLng(arealat, arealing));
      map.setZoom(zoom);
    });

    //* Time Api
    res = await axios.get(apiURL.time, {
      params: {
        format: "json",
        by: "position",
        lat: arealat,
        lng: arealing,
        key: timeKey
      }
    });
    data = res.data;
    thetime = data.formatted.split(" ");
    ftime = thetime[1];
    this.setState({ time: ftime });

    //* Weather Api
    res = await axios.get(apiURL.weather, {
      params: {
        q: name,
        units: "imperial",
        appid: weatherKey
      }
    });
    data = res.data;
    name = data.name;

    let weather = data.weather[0].main;
    let temp = Math.ceil(data.main.temp);
    let wind = data.wind.speed;
    this.setState(() => ({ weather: { name, weather, temp, wind } }));
    //* News Api
    res = await axios.get(apiURL.news, {
      params: {
        q: name,
        apiKey: newsKey,
        pageSize: 6
      }
    });
    let articles = res.data.articles;
    if (articles.length < 0) {
      alert("No News Found");
    } else {
      articles.map(article => {
        const date = article.publishedAt.split("T");
        return this.setState(prevState => ({
          news: [
            ...prevState.news,
            {
              title: article.title,
              url: article.url,
              snippet: article.description,
              img: article.urlToImage,
              source: article.source.name,
              published: date[0]
            }
          ]
        }));
      });
    }
    $("#PSearch").val('')
  };
  render() {
    const {time,weather,news} = this.state
    return (
      <Locate
        click={this.locate}
        time={time}
        weather={weather}
        news={news}
      />
    );
  }
}
export default Location;
