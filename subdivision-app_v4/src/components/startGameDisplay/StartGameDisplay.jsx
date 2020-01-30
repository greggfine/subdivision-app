import React from "react";
import { connect } from "react-redux";
import { startGame } from "../../action-creators/startGame";
import Levels from "../levels/Levels";

import img from "../../images/pexels/silhouette-photo-of-man-singing-on-stage-1916824.jpg";

import { Container, Header, Button, Embed } from "semantic-ui-react";
import "./startGameDisplay.scss";

const StartGameDisplay = ({ startGame }) => (
  <Container className="Start-game">
    <Header size="huge" className="header">
      SUBDIVISIONS
    </Header>
    <Button onClick={startGame} inverted color="purple" size="huge">
      START GAME!
    </Button>
    <Levels />
    <Embed
      id="InMKcezbtA0"
      placeholder={img}
      source="youtube"
      autoPlay={true}
      style={{
        width: "800px",
        margin: "60px auto"
      }}
    />
  </Container>
);

export default connect(null, { startGame })(StartGameDisplay);
