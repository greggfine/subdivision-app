import React from "react";
import { connect } from "react-redux";

const Chances = ({ chances }) =>
  chances <= 10 ? (
    <div className="chances">CHANCES: {chances}/10</div>
  ) : (
    <div className="chances">GAME OVER</div>
  );

const mapStateToProps = ({ chances }) => ({ chances });

export default connect(mapStateToProps)(Chances);
