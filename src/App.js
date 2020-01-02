import React, { Component } from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { Route } from "react-router-dom";

import { Callback } from "./Components/Auth/Callback";
import { Logout } from "./Components/Auth/Logout";
import { LogoutCallback } from "./Components/Auth/LogoutCallback";
import { PrivateRoute } from "./PrivateRoute";
import { SilentRenew } from "./Components/Auth/SilentRenew";
import Map from "./Components/Map/Map";
import Home from "./Home";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <>
        <AuthProvider>
          <Nav />
          <Route exact path="/login" component={Callback} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/logout/callback" component={LogoutCallback} />
          <Route exact path="/silentrenew" component={SilentRenew} />
          <PrivateRoute path="/map" component={Map} />
          <Route exact path="/" component={Home} />
        </AuthProvider>
      </>
      // <AuthContext.Provider value={auth}>
      //   <Nav auth={auth} />
      //   <div className="body">
      //     <Route
      //       path="/"
      //       exact
      //       render={props => <Home auth={auth} {...props} />}
      //     />
      //     <Route
      //       path="/callback"
      //       render={props => <Callback auth={auth} {...props} />}
      //     />
      //     <Route
      //       path="/map"
      //       render={props => <MapPage auth={auth} {...props} />}
      //     />
      //     <PrivateRoute path="/profile" component={Profile} />
      //     <Route path="/public" component={Public} />
      //     <PrivateRoute path="/private" component={Private} />
      //     <PrivateRoute
      //       path="/courses"
      //       component={Courses}
      //       scopes={["read:courses"]}
      //     />
      //   </div>
      // </AuthContext.Provider>
    );
  }
}

export default App;
