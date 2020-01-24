import React from "react";
import { connect } from "react-redux";

const Lives = ({ lives }) =>
  lives > 0 ? (
    <div className="lives">LIVES : {lives}</div>
  ) : (
    <div className="lives">GAME OVER!</div>
  );

const mapStateToProps = ({ lives }) => ({ lives });
export default connect(mapStateToProps)(Lives);
