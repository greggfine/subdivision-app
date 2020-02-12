import React from "react";
import { Button, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const MuteBtn = ({ muted, toggleMuted }) => {
  return (
    <Button onClick={toggleMuted} data-testid="mute-btn">
      {muted ? (
        <Icon name="deaf" size="big"></Icon>
      ) : (
        <Icon name="sound" size="big"></Icon>
      )}
    </Button>
  );
};

export default MuteBtn;

MuteBtn.propTypes = {
  muted: PropTypes.bool,
  toggleMuted: PropTypes.func
};
