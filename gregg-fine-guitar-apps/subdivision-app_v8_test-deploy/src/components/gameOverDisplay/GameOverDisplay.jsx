import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setPlayAgain } from "../../action-creators/setPlayAgain";
import Levels from "../levels/Levels";

import { Container, Header, Button, Icon } from "semantic-ui-react";
import "./gameOverDisplay.scss";

import gfLogo from "../../images/gf_profile-pic.jpeg";

const GameOverDisplay = ({ score, setPlayAgain }) => (
  <Container className="Game-over">
    {/* <Header size="huge" className="Game-over-header">
      Game Over
    </Header> */}
    <div className="Game-over-info-wrapper">
      <Icon name="trophy" size="large" className="Score-icon" />
      <Header color="violet" className="final-score-header">
        Final Score: <span className="score">{score}</span>
      </Header>
      <Button
        onClick={setPlayAgain}
        inverted
        color="purple"
        size="huge"
        className="play-again-btn"
      >
        Play Again?
      </Button>
      <Levels />
    </div>

    <a
      className="youtube-wrapper"
      href="https://www.youtube.com/channel/UCWFnxg02ITStRxn4sotkJng?view_as=subscriber"
      target="_blank"
      rel="noopener"
    >
      <img src={gfLogo} alt="Gregg Fine Profile Pic" className="profile-pic" />
      <div className="channel-title-icon-wrapper">
        <p>Gregg Fine Guitar</p>
        <Icon name="youtube play" className="youtube-icon" />
      </div>
    </a>
  </Container>
);

const mapStateToProps = ({ score }) => ({ score });

export default connect(mapStateToProps, { setPlayAgain })(GameOverDisplay);

GameOverDisplay.propTypes = {
  score: PropTypes.number,
  setPlayAgain: PropTypes.func
};
