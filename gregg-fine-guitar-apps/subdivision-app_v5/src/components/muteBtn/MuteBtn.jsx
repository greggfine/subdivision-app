import React from "react";
import { Button, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./muteBtn.scss";

const MuteBtn = ({ muted, toggleMuted }) => {
  return (
    <Button onClick={toggleMuted} data-testid="mute-btn" className="mute-btn">
      {muted ? (
        <Icon name="deaf" size="big" className="icon"></Icon>
      ) : (
        <Icon name="sound" size="big" className="icon"></Icon>
      )}
    </Button>
  );
};

export default MuteBtn;

MuteBtn.propTypes = {
  muted: PropTypes.bool,
  toggleMuted: PropTypes.func
};
