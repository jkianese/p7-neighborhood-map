import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.loadMap()
  }

  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBj5AzHYC1kUPRnvaT6G6zsAONHSpKmoqQ&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
   var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 28.418626, lng: -81.583205},
      zoom: 13
    }); 
  }  

  render() { 
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

/*
https://developers.google.com/maps/documentation/javascript/tutorial
*/

function loadScript(source) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = source
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


export default App;
