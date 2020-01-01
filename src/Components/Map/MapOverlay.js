import React, { Component } from "react";
import "./MapOverlay.scss";
import AssetItem from "./AssetItem";
import Title from "../Title/Title";

class MapOverlay extends Component {
  render() {
    return (
      <div className="mapOverlay">
        <ul>
          <li>
            <Title />
          </li>
          <li>
            <AssetItem />
          </li>
          <li>
            <AssetItem />
          </li>
          <li>
            <AssetItem />
          </li>
          <li>
            <AssetItem />
          </li>
          <li>
            <AssetItem />
          </li>
          <li>
            <AssetItem />
          </li>
          <li>
            <AssetItem />
          </li>
        </ul>
      </div>
    );
  }
}

export default MapOverlay;
