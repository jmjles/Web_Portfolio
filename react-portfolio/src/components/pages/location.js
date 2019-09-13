import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import u from '../config/url';
import k from '../config/keys';
import localk from '../config/localkeys.js';
import Locate from '../apps/Location';
let $ = require('jquery');
let axios = require('axios');

class Location extends Component{
  state ={
    time:'',
    weather:{
      name:'',
      weather:'',
      temp:'',
      wind:''
    },
    news:[
      {
        title:'',
        description:'',
        url:'',
        img:'',
        source:'',
        published:''}
      ]
  }
  componentDidMount(){
    let map;
    let gkey;
    if(process.env.NODE_ENV==='production'){
      gkey = k.google;
    }else{
      gkey = localk.google;
    }
    // Google Maps
    GoogleMapsLoader.KEY= gkey
    GoogleMapsLoader.VERSION='3.39'
    GoogleMapsLoader.load(function(google) {

    let options = {

      center: {lat: 48, lng:49},
      scrollwheel: false,
      zoom: 5,

    }

    map = new google.maps.Map(document.getElementById('map'), options);
    });
    return map;
  }

  locate = () => {
    let area = $( "#PSearch" ).val();
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

      if(process.env.NODE_ENV==='production'){
        gkey = k.google;
        tkey = k.time;
        nkey = k.news;
        wkey = k.weather;
      }else{
        gkey = localk.google;
        tkey = localk.time;
        nkey = localk.news;
        wkey = localk.weather;
      }
      console.log(process.env.NODE_ENV);
      console.log(process.env);
      let gurl = u.google;
      let turl = u.time;
      let nurl = u.news;
      let wurl = u.weather;

      //clear news
      this.setState({news:[{title:'',description:'',url:'',img:''}]});
    axios.get(gurl,{
      params:{
        address:area,
        key:gkey
      }
    })
    .then((response)=> {
      let zoom;
      let name;
      
      name = response.data.results[0].address_components[0].long_name;
      arealat = response.data.results[0].geometry.location.lat;
      arealing = response.data.results[0].geometry.location.lng;

      if (response.data.results[0].types[0] === 'locality'){
        zoom = 10
      }
      else{
        zoom = 5
      }
      GoogleMapsLoader.load(function (google){
          map.setCenter(new google.maps.LatLng(arealat,arealing));
          map.setZoom(zoom);
      });
  
      axios.get(turl,{
        params:{
          format:'json',
          by: 'position',
          lat: arealat,
          lng: arealing,
          key: tkey
        }
      })
      .then((response) => {
        thetime = response.data.formatted.split(" ");
        ftime = thetime[1];
        this.setState({time:ftime})
      })
      .catch(function(error){
        console.log(error);
      })
      //Get Weather
      axios.get(wurl,{
        params:{
          q: name,
          units:"imperial",
          appid: wkey
        }
      }).then((response)=>{
        let info = response.data;
        let name = info.name;
        let weather = info.weather[0].main;
        let temp = info.main.temp;
        let wind = info.wind.speed;

        this.setState(()=> ({weather:{name, weather, temp, wind}}));

      }).catch((er)=>{
        console.log(er);
      });

    $('#PSearch').val('');
    // News Request
    axios.get(nurl,{
      params:{
        q:name,
        apiKey:nkey,
        pageSize: 6
      }
    })
    .then((response)=>{
      let articles = response.data.articles;
      console.log(articles)
      if (articles.length < 0) {
        let news= 'No News Found';
      }
      else {
        for (let i = 0; i < articles.length; i++) {
          let article = articles[i];
          let date = article.publishedAt.split("T");
          this.setState((p) =>({
            news:[...p.news,
              {
              title:article.title,
              url:article.url,
              snippet:article.description,
              img:article.urlToImage,
              source:article.source.name,
              published:date[0]
            },]
          }));
        };
      };
    })
    .catch((err) => {
      console.log(err);
    });  
  }).catch((er)=> alert('There was an error processing your request. Please check the place name and try again.'));
    }
  render(){
    // Gets Area lat long from input
    return(
      <Locate click={this.locate} time={this.state.time} weather= {this.state.weather} news={this.state.news}/>
    );
  }
}
export default Location;