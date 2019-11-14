import React, { Component } from "react";
import GoogleMapsLoader from "google-maps";
import u from "../config/url";
import localk from "../config/localkeys.js";
import Locate from "../apps/Location";
const $ = require("jquery");
const axios = require("axios");

class Location extends Component {
  state = {
    time: "",
    weather: {
      name: "",
      weather: "",
      temp: "",
      wind: ""
    },
    news: [
      {
        title: "",
        description: "",
        url: "",
        img: "",
        source: "",
        published: ""
      }
    ],
    keys: {}
  };

  componentDidMount() {
    let map;
    (async () => {
      let gkey;
      if (process.env.NODE_ENV === "production") {
        const res = await axios.get("/api");
        this.setState({ keys: res });
        gkey = this.state.keys.google;
      } else {
        gkey = localk.google;
      }
      //* Google Maps
      GoogleMapsLoader.KEY = gkey;
      GoogleMapsLoader.VERSION = "3.39";
      GoogleMapsLoader.load(function(google) {
        let options = {
          center: { lat: 48, lng: 49 },
          scrollwheel: false,
          zoom: 5
        };

        map = new google.maps.Map(document.getElementById("map"), options);
      });
    })();
    return map;
  }

  locate = async () => {
    let area = $("#PSearch").val();

    // Global Variables
    let map = this.componentDidMount();
    let arealat;
    let arealing;
    let thetime;
    let ftime;

    //keys and urls

    let gkey;
    let tkey;
    let nkey;
    let wkey;

    if (process.env.NODE_ENV === "production") {
      gkey = this.state.keys.google;
      tkey = this.state.keys.time;
      nkey = this.state.keys.news;
      wkey = this.state.keys.weather;
    } else {
      gkey = localk.google;
      tkey = localk.time;
      nkey = localk.news;
      wkey = localk.weather;
    }

    let gurl = u.google;
    let turl = u.time;
    let nurl = u.news;
    let wurl = u.weather;
    //clear news
    this.setState({ news: [{ title: "", description: "", url: "", img: "" }] });

    //* Google Api

    let res = await axios.get(gurl, {
      params: {
        address: area,
        key: gkey
      }
    });
    let data = res.data;
    let zoom;
    let name;
    name = data.results[0].address_components[0].long_name;
    arealat = data.results[0].geometry.location.lat;
    arealing = data.results[0].geometry.location.lng;

    if (data.results[0].types[0] === "locality") {
      zoom = 10;
    } else {
      zoom = 5;
    }
    GoogleMapsLoader.load(function(google) {
      map.setCenter(new google.maps.LatLng(arealat, arealing));
      map.setZoom(zoom);
    });

    //* Time Api
    res = await axios.get(turl, {
      params: {
        format: "json",
        by: "position",
        lat: arealat,
        lng: arealing,
        key: tkey
      }
    });
    data = res.data;
    thetime = data.formatted.split(" ");
    ftime = thetime[1];
    this.setState({ time: ftime });

    //* Weather Api
    res = await axios.get(wurl, {
      params: {
        q: name,
        units: "imperial",
        appid: wkey
      }
    });
    data = res.data;
    let info = data;
    name = info.name;
    let weather = info.weather[0].main;
    let temp = info.main.temp;
    let wind = info.wind.speed;
    this.setState(() => ({ weather: { name, weather, temp, wind } }));

    $("#PSearch").val("");
    //* News Api
    res = await axios.get(nurl, {
      params: {
        q: name,
        apiKey: nkey,
        pageSize: 6
      }
    });
    let articles = res.data.articles;
    if (articles.length < 0) {
      let news = "No News Found";
    } else {
      for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        let date = article.publishedAt.split("T");
        this.setState(p => ({
          news: [
            ...p.news,
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
      }
    }
  };
  render() {
    // Gets Area lat long from input
    return (
      <Locate
        click={this.locate}
        time={this.state.time}
        weather={this.state.weather}
        news={this.state.news}
      />
    );
  }
}
export default Location;
