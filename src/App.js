import "./App.css";
import Button from "react-bootstrap/Button";
import { Home } from "./component/Home";
import { Department } from "./component/Department";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "./component/Navigation";
import  Employee from "./component/Employee";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          {" "}
          React js with web api Demo
        </h3>
        <h5 className="m-3 d-flex justify-content-center">
          {" "}
          React js with web api portal
        </h5>

        <Navigation></Navigation>

        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/department" component={Department}></Route>
           <Route path="/employee" component={Employee}></Route> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
