import React from "react";
import { connect } from "react-redux";

const Score = ({ score }) => {
  return <div className="score">SCORE : {score}</div>;
};

const mapStateToProps = state => ({
  score: state.score
});

export default connect(mapStateToProps)(Score);
