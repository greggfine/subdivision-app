import React from "react";
import { connect } from "react-redux";
import { setGameOver } from "../actions/setGameOver";
import gameOver from "../audio/sfx/game_over.mp3";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import uuid from "uuid";

const playGameOver = () => {
  const gameOver = document.getElementById("gameOver");
  gameOver.play();
};

const Lives = ({ lives, setGameOver }) => {
  const createLivesIcons = () => {
    const icons = [];
    while (icons.length < lives) {
      icons.push(<Icon key={uuid()} name="user circle" size="small" />);
    }
    return icons;
  };
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
    return <div className="lives">{createLivesIcons()}</div>;
  }
};
const mapStateToProps = state => {
  return {
    lives: state.lives
  };
};
export default connect(mapStateToProps, { setGameOver })(Lives);

Lives.propTypes = {
  lives: PropTypes.number
};
