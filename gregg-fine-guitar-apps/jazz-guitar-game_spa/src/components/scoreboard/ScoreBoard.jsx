import React from "react";
import Lives from "../lives/Lives";
import Score from "../score/Score";
import Chances from "../chances/Chances";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Menu } from "semantic-ui-react";
import "./scoreboard.scss";

const ScoreBoard = () => {
  return (
    <Menu className="Scoreboard" color="purple" inverted size="huge">
      <Lives />
      <Score />
      <Chances />
    </Menu>
  );
};

export default ScoreBoard;
