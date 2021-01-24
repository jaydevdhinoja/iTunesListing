import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TopAlbums from "../pages/TopAlbums";
import SingleAlbum from "../pages/SingleAlbum";
import TopSongs from "../pages/TopSongs";
import Favourites from "../pages/Favourites";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TopAlbums} />
    <Route exact path="/albums/:id" component={SingleAlbum} />
    <Route path="/albums">
      <Redirect push to="/" />
    </Route>
    <Route path="/songs" component={TopSongs} />
    <Route path="/favourites" component={Favourites} />
  </Switch>
);

export default Routes;
