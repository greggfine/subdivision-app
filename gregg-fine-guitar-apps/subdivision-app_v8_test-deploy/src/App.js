import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.scss";
import SubdivisionApp from "./components/subdivisionApp/SubdivisionApp";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Route exact path="/" component={LandingPage}></Route> */}
        <Switch>
          <Route exact path="/" component={SubdivisionApp} />
          {/* <Route exact path="/subdivision-app" component={SubdivisionApp} /> */}
          {/* <Route exact path="/jazz-guitar-app" component={SubdivisionApp} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
