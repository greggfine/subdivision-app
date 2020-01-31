import React from "react";
import { Label, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./hearAgain.scss";

const HearAgain = ({ numRepeats, disabled, hearLoopAgain }) => {
  return (
    <div className="Hear-again">
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
  );
};

export default HearAgain;

HearAgain.propTypes = {
  numRepeats: PropTypes.number,
  disabled: PropTypes.bool,
  hearLoopAgain: PropTypes.func
};
