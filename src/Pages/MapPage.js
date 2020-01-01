import React, { Component } from "react";
import Map from "../Components/Map/Map";
import MapOverlay from "../Components/Map/MapOverlay";

class MapPage extends Component {
  render() {
    return (
      <>
        <Map></Map>
        <MapOverlay></MapOverlay>
      </>
    );
  }
}

export default MapPage;
