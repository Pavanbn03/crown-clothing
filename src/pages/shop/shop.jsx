import React from "react";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import { Route, Switch } from "react-router-dom";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Switch>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      </Switch>
    </div>
  );
};

export default Shop;
