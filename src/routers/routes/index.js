import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Repositories } from "pages/Repositories";
import { Favorites } from "pages/Favorites";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Repositories} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}
