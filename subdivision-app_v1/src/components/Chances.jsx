import React from "react";
import { connect } from "react-redux";
import { setGameOver } from "../actions/setGameOver";

const Chances = ({ chances, setGameOver }) => {
  if (chances === 10) {
    window.setTimeout(() => {
      setGameOver();
    }, 2000);
    return <div className="chances">CHANCES: {chances}/10</div>;
  } else {
    return <div className="chances">CHANCES: {chances}/10</div>;
  }
};

const mapStateToProps = ({ chances }) => ({ chances });

export default connect(mapStateToProps, { setGameOver })(Chances);
