import React from "react";
import Lives from "../lives/Lives";
import Score from "../score/Score";
import Chances from "../chances/Chances";
import Tip from "../tip/Tip";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Menu } from "semantic-ui-react";
import "./scoreboard.scss";

const ScoreBoard = ({ level }) => {
  return (
    <Menu className="Scoreboard" color="purple" inverted size="huge">
      <Lives />
      <Score />
      <Chances />
      <Tip />
      <h5>{level.mode} mode</h5>
    </Menu>
  );
};

const mapStateToProps = ({ level }) => ({ level });

export default connect(mapStateToProps)(ScoreBoard);

ScoreBoard.propTypes = {
  level: PropTypes.object
};
