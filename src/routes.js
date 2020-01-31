import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Page404 from "./pages/error404";
import Main from "./pages/main";
import Product from "./pages/products";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/products/:id" component={Product} />
      <Route exact path="/404" component={Page404} />
      <Route exact path="*" render={() => <Redirect to="/404" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
