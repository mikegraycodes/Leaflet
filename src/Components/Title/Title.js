import React, { Component } from "react";
import "./Title.scss";

class Title extends Component {
  render() {
    return (
      <div className="title">
        <ul>
          <li>
            <img src="map-marker.svg" />
          </li>
          <li>Assets</li>
        </ul>
      </div>
    );
  }
}

export default Title;
