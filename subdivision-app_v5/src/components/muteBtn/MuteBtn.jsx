import React from "react";
import PropTypes from "prop-types";

import { Button, Icon } from "semantic-ui-react";
import "./muteBtn.scss";

const MuteBtn = ({ muted, toggleMuted }) => (
  <Button onClick={toggleMuted} data-testid="mute-btn" className="Mute-btn">
    {muted ? (
      <Icon name="deaf" size="big" className="icon"></Icon>
    ) : (
      <Icon name="sound" size="big" className="icon"></Icon>
    )}
  </Button>
);

export default MuteBtn;

MuteBtn.propTypes = {
  muted: PropTypes.bool,
  toggleMuted: PropTypes.func
};
