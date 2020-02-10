import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>GREGG FINE GUITAR APPS</h1>
      <Link to="/">Home</Link> <br />
      <Link to="/subdivision-app">Subdivision App</Link> <br />
      {/* <Link to="/jazzGuitarApp">Jazz Guitar App</Link> */}
      {/* <Link to="http://greggfineguitar.com">Jazz Guitar App</Link> */}
      <a href="http://greggfineguitar.com"> Jazz Guitar App </a>
    </div>
  );
};

export default LandingPage;
