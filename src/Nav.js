import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "./providers/AuthProvider";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-right">
          <li>
            <AuthConsumer>
              {({ isAuthenticated, logout, signinRedirect }) => {
                return (
                  <button onClick={isAuthenticated() ? logout : signinRedirect}>
                    {isAuthenticated() ? "Log Out" : "Log In"}
                  </button>
                );
              }}
            </AuthConsumer>
          </li>
        </ul>
        <ul className="nav-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
