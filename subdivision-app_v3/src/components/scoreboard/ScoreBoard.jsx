import React from "react";
import Lives from "../lives/Lives";
import Score from "../score/Score";
import Chances from "../chances/Chances";

import { Menu } from "semantic-ui-react";
import "./scoreboard.scss";

const ScoreBoard = () => (
  <Menu className="Scoreboard" color="purple" inverted size="huge">
    <Lives />
    <Score />
    <Chances />
  </Menu>
);

export default ScoreBoard;
