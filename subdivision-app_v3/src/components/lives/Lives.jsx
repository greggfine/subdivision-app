import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setGameOver } from "../../action-creators/setGameOver";
import uuid from "uuid";

import gameOver from "../../audio/sfx/game_over.mp3";

import { Icon } from "semantic-ui-react";
import "./lives.scss";

const playGameOver = () => {
  const gameOver = document.getElementById("gameOver");
  gameOver.play();
};

const Lives = ({ lives, setGameOver }) => {
  const createLivesIcons = (totalLives, arr = []) => {
    if (arr.length === totalLives) {
      return arr;
    }
    arr.push(<Icon key={uuid()} name="user circle" size="small" />);
    return createLivesIcons(lives, arr);
  };

  if (lives === 0) {
    window.setTimeout(() => {
      playGameOver();
      setGameOver();
    }, 5000);
    return (
      <div className="Lives">
        <audio src={gameOver} id="gameOver"></audio>
        LIVES : {lives}
      </div>
    );
  } else {
    return <div className="Lives">{createLivesIcons()}</div>;
  }
};
const mapStateToProps = ({ lives }) => ({ lives });

export default connect(mapStateToProps, { setGameOver })(Lives);

Lives.propTypes = {
  lives: PropTypes.number
};
