import React from "react";
import { connect } from "react-redux";
import { startGame } from "../../action-creators/startGame";

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
    {/* <video src="https://www.youtube.com/watch?v=InMKcezbtA0"></video> */}
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
