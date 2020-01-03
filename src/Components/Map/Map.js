import "./Map.scss";
import React from "react";
import MapService from "../../Services/MapService";

const lat = 53.3491415;
const long = -1.4951546;

class Map extends React.Component {
  mapservice = null;
  // constructor() {
  //   super();
  //   this.mapservice = new MapService("map");
  // }
  componentDidMount() {
    this.mapservice = new MapService("map");
  }

  render() {
    return <div id="map"></div>;
  }
}

export default Map;
