import "./App.css";
import "./styles/base.css";
import "./styles/media.css";
import "antd/dist/antd.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AccountSetup from "./pages/AccountSetup";
import Body from "./components/Body";
import Category from "./pages/Category";
import CreateStore from "./pages/CreateStore";
import EpopPlan from "./pages/EpopPlan";
import Features from "./pages/Features";
import Login from "./pages/Login";

//import Template from "./pages/EpopPlanetemplate";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/epopplan" component={EpopPlan} />
          <Route exact path="/Category" component={Category} />
          <Route exact path="/createstore" component={CreateStore} />
          <Route exact path="/accountsetup" component={AccountSetup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
