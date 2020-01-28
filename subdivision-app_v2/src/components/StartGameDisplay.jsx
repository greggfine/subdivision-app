import React from "react";
import { connect } from "react-redux";
import { startGame } from "../actions/startGame";
import { Container, Header, Button } from "semantic-ui-react";

const StartGameDisplay = ({ startGame }) => {
  return (
    <Container>
      <Header size="huge">SUBDIVISIONS</Header>
      <Button onClick={startGame}>START GAME!</Button>
    </Container>
  );
};

export default connect(null, { startGame })(StartGameDisplay);
