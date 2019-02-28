import React from "react";
import App from "../App";
import Recipe from "./Recipe";

import {BrowserRouter , Switch , Route} from "react-router-dom";

const Router = () => (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/recipe" component={Recipe}/>
        </Switch>
      </BrowserRouter>
    </div>
);

export default Router;