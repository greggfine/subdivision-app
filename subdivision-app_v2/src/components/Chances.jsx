import React from "react";
import { connect } from "react-redux";
import { setGameOver } from "../actions/setGameOver";
import gameOver from "../audio/sfx/game_over.mp3";

const playGameOver = () => {
  const gameOver = document.getElementById("gameOver");
  gameOver.play();
};

const Chances = ({ chances, setGameOver }) => {
  if (chances === 10) {
    window.setTimeout(() => {
      playGameOver();
      setGameOver();
    }, 5000);
    return (
      <div className="chances">
        <audio src={gameOver} id="gameOver"></audio>
        CHANCES: {chances}/10
      </div>
    );
  } else {
    return <div className="chances">CHANCES: {chances}/10</div>;
  }
};

const mapStateToProps = ({ chances }) => ({ chances });

export default connect(mapStateToProps, { setGameOver })(Chances);
