import React from "react";
import { connect } from "react-redux";
import { startGame } from "../../action-creators/startGame";
// import Levels from "../levels/Levels";
import gfProfilePic from "../../images/gf_profile-pic.jpeg";

// import img from "../../images/pexels/silhouette-photo-of-man-singing-on-stage-1916824.jpg";

import { Container, Header, Button, Embed } from "semantic-ui-react";
import "./startGameDisplay.scss";

const StartGameDisplay = ({ startGame }) => (
  <Container className="Start-game">
    {/* <Header size="huge" className="header">
      SUBDIVISIONS
    </Header> */}
    <Button
      //   className="start-game-btn"
      onClick={startGame}
      inverted
      color="purple"
      size="huge"
    >
      {/* <i className="fa fa-play" aria-hidden="true"></i> */}
      START GAME!
    </Button>
    <div className="container">
      <h1>Name The Jazz Guitarist!</h1>

      <span className="turn-up-speakers">
        <em>*Turn up your speakers/phone ringer on</em>
      </span>

      <a
        className="youtube-wrapper"
        href="https://www.youtube.com/channel/UCWFnxg02ITStRxn4sotkJng?view_as=subscriber"
        target="_blank"
        rel="noopener"
      >
        <img
          src={gfProfilePic}
          alt="Gregg Fine Profile Pic"
          className="profile-pic"
        />
        <div className="channel-title-icon-wrapper">
          <p>Gregg Fine Guitar</p>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </div>
      </a>
    </div>

    {/* <button className="start-game-btn">
      <i className="fa fa-play" aria-hidden="true"></i> <span>Start Game</span>
    </button> */}

    {/* <Levels /> */}
    {/* <Embed
      id="InMKcezbtA0"
      placeholder={img}
      source="youtube"
      autoPlay={true}
      style={{
        width: "800px",
        margin: "60px auto"
      }}
    /> */}
  </Container>
);

export default connect(null, { startGame })(StartGameDisplay);
