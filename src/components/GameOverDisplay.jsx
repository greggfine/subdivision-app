import React from "react";
import { connect } from "react-redux";
import { Container, Header, Button } from "semantic-ui-react";
import { setPlayAgain } from "../actions/setPlayAgain";

const GameOverDisplay = ({ score, setPlayAgain }) => {
  return (
    <Container>
      <Header size="huge">Game Over</Header>
      <h3>Final Score: {score}</h3>
      <Button onClick={setPlayAgain}>Play Again?</Button>
    </Container>
  );
};

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps, { setPlayAgain })(GameOverDisplay);
