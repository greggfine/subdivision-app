import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Icon } from "semantic-ui-react";
import "./score.scss";

const Score = ({ score }) => (
  <div className="Score">
    <Icon name="trophy" size="small" className="Score-icon" />
    <span className="Score-txt">{score}</span>
  </div>
);

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps)(Score);

Score.propTypes = {
  score: PropTypes.number
};
