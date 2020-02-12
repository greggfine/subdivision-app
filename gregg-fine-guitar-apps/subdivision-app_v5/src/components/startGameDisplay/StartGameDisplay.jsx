import React from "react";
import { connect } from "react-redux";
import { startGame } from "../../action-creators/startGame";
import Levels from "../levels/Levels";

import img from "../../images/pexels/silhouette-photo-of-man-singing-on-stage-1916824.jpg";

import { Container, Header, Button, Embed } from "semantic-ui-react";
import "./startGameDisplay.scss";

export const StartGameDisplay = ({ startGame }) => (
  <Container className="Start-game">
    <Header size="huge" className="header">
      SUBDIVISIONS
    </Header>
    <Button
      className="Start-game-btn"
      onClick={startGame}
      inverted
      color="purple"
      size="huge"
      id="Start-game-btn"
    >
      START GAME!
    </Button>
    <Levels />
    <Embed
      className="video"
      id="InMKcezbtA0"
      placeholder={img}
      source="youtube"
      autoPlay={true}
    />
  </Container>
);

export default connect(null, { startGame })(StartGameDisplay);
