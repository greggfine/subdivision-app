import React from "react";
import { connect } from "react-redux";
import { startGame } from "../../action-creators/startGame";

import { Container, Header, Button } from "semantic-ui-react";
import "./startGameDisplay.scss";

const StartGameDisplay = ({ startGame }) => (
  <Container className="Start-game">
    <Header size="huge" className="header">
      SUBDIVISIONS
    </Header>
    <Button onClick={startGame} inverted color="purple" size="huge">
      START GAME!
    </Button>
  </Container>
);

export default connect(null, { startGame })(StartGameDisplay);
