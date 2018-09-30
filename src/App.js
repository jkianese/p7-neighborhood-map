import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
// import map from './Map'
import DisMap from './DisMap'


class App extends Component {
  render () {
    return (
      <main>
        <div id="map">
          <DisMap />
        </div>
      </main>  
    )
  }
}

export default App