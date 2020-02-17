import React from "react";
import { Button, Label } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./hearAgain.scss";

const HearAgain = ({ numRepeats, disabled, hearLoopAgain, lives }) => {
  return (
    <Button
      className="txt-label-wrapper"
      color="green"
      onClick={hearLoopAgain}
      disabled={disabled}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <span className="hear-again-txt"> Hear Again?</span>
      <Label circular className="label">
        {numRepeats}/2
      </Label>
    </Button>
  );
};

export default HearAgain;

HearAgain.propTypes = {
  numRepeats: PropTypes.number,
  disabled: PropTypes.bool,
  hearLoopAgain: PropTypes.func
};
