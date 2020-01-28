import React from "react";
import { connect } from "react-redux";
import { setGameOver } from "../actions/setGameOver";
import gameOver from "../audio/sfx/game_over.mp3";

const playGameOver = () => {
  const gameOver = document.getElementById("gameOver");
  gameOver.play();
};

const Lives = ({ lives, setGameOver }) => {
  if (lives === 0) {
    window.setTimeout(() => {
      playGameOver();
      setGameOver();
    }, 5000);
    return (
      <div className="lives">
        <audio src={gameOver} id="gameOver"></audio>
        LIVES : {lives}
      </div>
    );
  } else {
    return <div className="lives">LIVES : {lives}</div>;
  }
};
const mapStateToProps = state => {
  return {
    lives: state.lives
  };
};
export default connect(mapStateToProps, { setGameOver })(Lives);
