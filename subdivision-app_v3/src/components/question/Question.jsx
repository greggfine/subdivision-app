import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRandQuestion } from "../../action-creators/getRandQuestionAction";

import loop6 from "../../audio/loops/loop6.mp3";

import { Button, Header, Label, Icon } from "semantic-ui-react";
import "./question.scss";

const Question = ({ lives, playNext }) => {
  const [disabled, toggleDisabled] = useState(false);
  const [muted, toggleMuted] = useState(false);
  let [numRepeats, setNumRepeats] = useState(0);

  const audioRef = useRef();
  useEffect(() => {
    if (lives > 0) {
      toggleDisabled(true);
      window.setTimeout(() => {
        audioRef.current.play();
      }, 1000);
    }
  }, [playNext]);

  const hearLoopAgain = () => {
    setNumRepeats((numRepeats += 1));
    toggleDisabled(!disabled);
    audioRef.current.src = `${loop6}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`;
    audioRef.current.play();
  };

  const handleToggleDisabled = () => {
    if (numRepeats < 2) {
      toggleDisabled(false);
    } else {
      setNumRepeats(0);
    }
  };

  const handleToggleMute = () => {
    toggleMuted(!muted);
  };
  return (
    <div className="Question">
      <Header size="huge" className="identify-heading">
        Identify the Subdivision
      </Header>
      <audio
        src={`${loop6}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
        type="audio/mp3"
        onPause={handleToggleDisabled}
        ref={audioRef}
        muted={muted}
      ></audio>
      <div className="hear-again-wrapper">
        <Icon
          name="play"
          onClick={hearLoopAgain}
          size="huge"
          disabled={disabled}
          className="play-again"
          style={{ cursor: disabled ? "not-allowed" : "pointer" }}
        />
        <span> Hear Again?</span>

        <Label circular>{numRepeats}/2</Label>
      </div>
      <Button onClick={handleToggleMute}>
        {" "}
        {muted ? (
          <Icon name="deaf" onClick={handleToggleMute} size="big"></Icon>
        ) : (
          <Icon name="sound" onClick={handleToggleMute} size="big"></Icon>
          //   <Icon
          //     name="assistive listening systems"
          //     onClick={handleToggleMute}
          //     size="big"
          //   ></Icon>
        )}
      </Button>
    </div>
  );
};

const mapStateToProps = ({ lives, playNext }) => ({ lives, playNext });

export default connect(mapStateToProps, { getRandQuestion })(Question);

Question.propTypes = {
  playNext: PropTypes.object
};
