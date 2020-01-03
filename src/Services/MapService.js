import React, { Component } from "react";
import L from "leaflet";

const lat = 53.3491415;
const long = -1.4951546;

export default class MapService {
  map = null;
  constructor(id) {
    this.map = L.map(id, {
      attributionControl: false,
      center: [lat, long],
      zoom: 16,
      layers: [L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")],
      zoomControl: false
    });

    L.control
      .zoom({
        position: "bottomright"
      })
      .addTo(this.map);
  }

  addMarker(lat, long) {
    return L.marker([lat, long]).addTo(this.map);
  }

  removeMarker(marker) {
    if (marker != undefined) {
      this.map.removeLayer(marker);
    }
  }

  updateMarker(marker, lat, long) {
    return marker.setLatLng(lat, long);
  }
}
