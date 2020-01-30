import React from "react";
import { connect } from "react-redux";
import { setMode } from "../../action-creators/setMode";
import "./levels.scss";

const Levels = ({ setMode }) => {
  return (
    <>
      <h1>Set Your Mode</h1>
      <select className="levels" onChange={e => setMode(e.target.value)}>
        <option value="easy">easy</option>
        <option value="hard">hard</option>
      </select>
    </>
  );
};

export default connect(null, { setMode })(Levels);
