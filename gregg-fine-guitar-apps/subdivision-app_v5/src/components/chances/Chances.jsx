import React from "react";
import { connect } from "react-redux";
import { setGameOver } from "../../action-creators/setGameOver";

import gameOver from "../../audio/sfx/game_over.mp3";

import PropTypes from "prop-types";

import "./chances.scss";

export const playGameOver = () => {
  const gameOver = document.getElementById("gameOver");
  gameOver.play();
};

export const Chances = ({ chances, setGameOver }) => {
  if (chances === 10) {
    window.setTimeout(() => {
      playGameOver();
      setGameOver();
    }, 5000);
    return (
      <>
        <audio src={gameOver} id="gameOver"></audio>
        CHANCES: {chances}/10
      </>
    );
  } else {
    return (
      <div className="Chances">
        <span className="Chances-nums">{chances}/10</span>
        <p className="Chances-txt">CHANCES</p>
      </div>
    );
  }
};

const mapStateToProps = ({ chances }) => ({ chances });

export default connect(mapStateToProps, { setGameOver })(Chances);

Chances.propTypes = {
  chances: PropTypes.number
};
