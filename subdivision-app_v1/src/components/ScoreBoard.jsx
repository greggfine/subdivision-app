import React from "react";
import Lives from "./Lives";
import Score from "./Score";
import Chances from "./Chances";

export default function ScoreBoard() {
  return (
    <div className="scoreboard">
      <Lives />
      <Score />
      <Chances />
    </div>
  );
}
