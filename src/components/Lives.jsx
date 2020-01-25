import React from "react";
import { connect } from "react-redux";
import { setGameOver } from "../actions/setGameOver";

const Lives = ({ lives, setGameOver }) => {
  if (lives === 0) {
    window.setTimeout(() => {
      setGameOver();
    }, 2000);
    return <div className="lives">LIVES : {lives}</div>;
  } else {
    return <div className="lives">LIVES : {lives}</div>;
  }
};
const mapStateToProps = state => {
  console.log(state);
  return {
    lives: state.lives
  };
};
export default connect(mapStateToProps, { setGameOver })(Lives);
