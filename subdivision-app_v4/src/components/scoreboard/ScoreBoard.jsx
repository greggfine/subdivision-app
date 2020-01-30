import React from "react";
import Lives from "../lives/Lives";
import Score from "../score/Score";
import Chances from "../chances/Chances";
import Tip from "../tip/Tip";

import { Menu } from "semantic-ui-react";
import "./scoreboard.scss";

const ScoreBoard = () => {
  return (
    <Menu className="Scoreboard" color="purple" inverted size="huge">
      <Lives />
      <Score />
      <Chances />
      <Tip />
    </Menu>
  );
};

export default ScoreBoard;
