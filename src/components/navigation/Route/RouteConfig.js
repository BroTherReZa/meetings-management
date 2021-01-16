import { Route, Switch} from "react-router-dom";
import * as Path from "./ConstPath";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import Account from '../../../containers/Account/Account'
import Today from "../../../containers/Today/Today";
import Important from '../../../containers/Important/Important'
import Planned from '../../../containers/Planned/Planned'
import Invited from '../../../containers/Invited/Invited'



const RouteConfig = () => {
  return (
    <Switch>
      <Route exact path={Path.TODAY} component={Today} />
      <Route exact path={Path.IMPORTANT} component={Important} />
      <Route exact path={Path.PLANNED} component={Planned} />
      <Route exact path={Path.INVITED} component={Invited} />
      <PrivateRoute path="/account">
          <Account />
      </PrivateRoute>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RouteConfig;
