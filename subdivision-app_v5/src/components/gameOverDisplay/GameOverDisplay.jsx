import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setPlayAgain } from "../../action-creators/setPlayAgain";

import { Container, Header, Button } from "semantic-ui-react";
import "./gameOverDisplay.scss";

const GameOverDisplay = ({ score, setPlayAgain }) => (
  <Container className="Game-over">
    <Header size="huge">Game Over</Header>
    <Header size="large" color="violet">
      Final Score: {score}
    </Header>
    <Button onClick={setPlayAgain} inverted color="purple" size="huge">
      Play Again?
    </Button>
  </Container>
);

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps, { setPlayAgain })(GameOverDisplay);

GameOverDisplay.propTypes = {
  score: PropTypes.number,
  setPlayAgain: PropTypes.func
};
