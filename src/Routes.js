import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { Callback } from "./Components/Auth/Callback";
import { Logout } from "./Components/Auth/Logout";
import { LogoutCallback } from "./Components/Auth/LogoutCallback";
import { PrivateRoute } from "./PrivateRoute";
import { SilentRenew } from "./Components/Auth/SilentRenew";
import Map from "./Components/Map/Map";
import Home from "./Home";

export const Routes = (
  <Switch>
    <Route exact path="/login" component={Callback} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/logout/callback" component={LogoutCallback} />
    <Route exact path="/silentrenew" component={SilentRenew} />
    <PrivateRoute path="/map" component={Map} />
    <Route exact path="/" component={Home} />
  </Switch>
);
