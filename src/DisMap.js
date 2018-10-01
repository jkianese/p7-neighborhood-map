import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
//import axios from 'axios'

class DisMap extends Component {
  state = {
    places: [
      {name: "Splash Moutain", location: {lat: 28.419425, lng: -81.585062}},
      {name: "Space Moutain", location: {lat: 28.419278, lng: -81.578037}},
      {name: "Haunted Mansion", location: {lat: 28.420424, lng: -81.582883}},
      {name: "Toy Story Mania!", location: {lat: 28.356365, lng: -81.561508}},
      {name: "Expedition Everest", location: {lat: 28.358982, lng: -81.587155}},
      {name: "Twilight Zone Tower of Terror", location: {lat: 28.360344, lng: -81.559917}},
      {name: "Mission: Space", location: {lat: 28.374235, lng: -81.547006}},
      {name: "Cinderella's Royal Table", location: {lat: 28.419722, lng: -81.581232}},
      {name: "Be Our Guest", location: {lat: 28.421364, lng: -81.580714}},
      {name: "Sci-Fi Dine-In Theater", location: {lat: 28.355898, lng: -81.559725}},
      {name: "50s Prime Time Cafe", location: {lat: 28.357578, lng: -81.558714}},
      {name: "Chef Mickey's", location: {lat: 28.414451, lng: -81.574385}},
      {name: "Akershus Royal Banquet Hall", location: {lat: 28.370486, lng: -81.546795}},
      {name: "Garden Grill", location: {lat: 28.374089, lng: -81.552675}},
    ]
  }
}

export default DisMap

/* -- Code From WT series
class DisMap extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
    // this.loadMap()
  }

  loadMap = () => { // script on index.html. Can I ref that?
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBj5AzHYC1kUPRnvaT6G6zsAONHSpKmoqQ&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "F1BIU3KU3RZFBQKCLKJ2MX1AT2ZRZFYRUXTJUMFGA1YUS5ZF",
      client_secret: "N1HLP0MSWYJJATAS3CBQTTSZ2WLME5RB2TAUWHGE2UXZ5A1E",
      query: "attractions", // WT used "food"
      near: "Disney World",
      v: "20180323"
    }

    // From Walthrough video series
    // Run: npm install axios
    axios.get(endPoint + new URLSearchParams(parameters)) //URLSearchParams is actual function, don't change
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.loadMap())
      })
      .catch(error => {
        console.log("Error: " + error)
      })

  }

  initMap = () => {

    // create a map 
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 28.385233, lng: -81.563873},
      zoom: 13
    })
    
    // create an infowindow
    var infowindow = new window.google.maps.InfoWindow()

    // display dynamic markers
    this.state.venues.map(myVenue => {

    var contentString = `${myVenue.venue.name}` // Removed Place Name in WT 

    var marker = new window.google.maps.Marker({
      position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
      map: map,
      title: myVenue.venue.name
    })

    // click on a marker
    marker.addListener('click', function() {
      
      // Change the Content
      infowindow.setContent(contentString)
      
      // Open an InfoWindow
      infowindow.open(map, marker)
    })
    
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

// From Elharony WT video #2
function loadScript(source) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = source
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
    
export default DisMap
*/