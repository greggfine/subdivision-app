import React from "react";
import { connect } from "react-redux";
import { getRandQuestion } from "../actions/getRandQuestionAction";
import { Button } from "semantic-ui-react";
import loop1 from "./loop1.mp3";

const Question = ({ questions, getRandQuestion }) => {
  return (
    <div className="question">
      <img src={questions["correctAnswer"]}></img>
      <audio src={loop1} autoPlay type="audio/mpeg"></audio>
      <Button onClick={() => getRandQuestion()}>Get Random Question</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps, { getRandQuestion })(Question);
