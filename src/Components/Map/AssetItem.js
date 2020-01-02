import React, { Component } from "react";
import "./AssetItem.scss";

class AssetItem extends Component {
  render() {
    return (
      <div className="assetItem">
        <ul>
          <li>
            <img src="bus0.png" />
          </li>
          <li>FleetId</li>
          <li>
            <img src="bus0.png" />
          </li>
          <li>WIFI</li>
          <li>Line</li>
          <li>Button</li>
        </ul>
      </div>
    );
  }
}

export default AssetItem;
