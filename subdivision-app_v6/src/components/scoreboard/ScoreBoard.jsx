import React from "react";
import Lives from "../lives/Lives";
import Score from "../score/Score";
import Chances from "../chances/Chances";

import { Menu } from "semantic-ui-react";
import "./scoreboard.scss";

const ScoreBoard = () => {
  return (
    <Menu className="Scoreboard">
      <div className="lives-score-chances-wrapper">
        <Lives />
        <Score />
        <Chances />
      </div>
    </Menu>
  );
};

export default ScoreBoard;
