import React from "react";
import { connect } from "react-redux";
import { startGame } from "../actions/startGame";
import { Container, Header, Button } from "semantic-ui-react";

const StartGameDisplay = ({ startGame }) => {
  return (
    <Container className="start-game-container">
      <Header size="huge" className="header">
        SUBDIVISIONS
      </Header>
      <Button onClick={startGame} inverted color="purple" size="huge">
        START GAME!
      </Button>
    </Container>
  );
};

export default connect(null, { startGame })(StartGameDisplay);
