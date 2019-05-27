import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ArticleListView, Article } from "./Pages";


export default () =>
  <Switch>
    <Route path="/" exact component={ArticleListView} />
    <Route path="/:pathParam" exact component={Article} />
    <Route render={() => <Redirect to={{pathname: "/"}} />} />
  </Switch>
