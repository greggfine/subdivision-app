import React from "react";
import Lives from "./Lives";
import Score from "./Score";
import Chances from "./Chances";
import { Menu } from "semantic-ui-react";

export default function ScoreBoard() {
  return (
    <Menu className="scoreboard" color="purple" inverted size="huge">
      <Lives />
      <Score />
      <Chances />
    </Menu>
  );
}
