import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setGameOver } from "../../action-creators/setGameOver";
import uuid from "uuid";

import gameOver from "../../audio/sfx/game_over.mp3";

import { Icon } from "semantic-ui-react";
import "./lives.scss";

export const Lives = ({ lives, muted, setGameOver }) => {
  const audioRef = useRef();
  const playGameOver = () => {
    audioRef.current.play();
  };
  const createLivesIcons = (totalLives, arr = []) => {
    if (arr.length === totalLives) {
      return arr;
    }
    arr.push(<Icon key={uuid()} name="user circle" size="small" />);
    return createLivesIcons(lives, arr);
  };
  useEffect(() => {
    if (lives === 0) {
      setTimeout(() => {
        audioRef.current.play();
      }, 500);
    }
  }, [lives]);

  if (lives === 0) {
    window.setTimeout(() => {
      setGameOver();
    }, 5000);
    return (
      <div className="Lives">
        {/* {playGameOver()} */}
        <audio
          src={gameOver}
          id="gameOver"
          ref={audioRef}
          muted={muted}
        ></audio>
        <span className="lives-txt">LIVES : {lives}</span>
      </div>
    );
  } else {
    return (
      <div className="Lives">
        {/* <audio src={gameOver} id="gameOver" ref={audioRef}></audio> */}
        {createLivesIcons()}
      </div>
    );
  }
};
const mapStateToProps = ({ lives, muted }) => ({ lives, muted });

export default connect(mapStateToProps, { setGameOver })(Lives);

Lives.propTypes = {
  lives: PropTypes.number
};
