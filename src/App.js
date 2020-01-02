import React, { Component } from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <>
        <AuthProvider>
          <Nav></Nav>
          <BrowserRouter children={Routes} basename={"/"} />
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
