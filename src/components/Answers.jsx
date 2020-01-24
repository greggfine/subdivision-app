import React from "react";
import { connect } from "react-redux";
import { shuffle } from "lodash";
import uuid from "uuid";
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from "../actions/handleAnswers";
import { Button } from "semantic-ui-react";

const Answers = ({ questions, handleCorrectAnswer, handleWrongAnswer }) => {
  const generateBtns = () =>
    shuffle([
      <Button key={uuid()} onClick={handleCorrectAnswer}>
        <img src={questions["correctAnswer"]} />
      </Button>,
      <Button key={uuid()} onClick={handleWrongAnswer}>
        <img src={questions["wrongAnswer"]} />
      </Button>
    ]);
  return (
    <div className="answers">
      <div className="answer-btns">{generateBtns().map(button => button)}</div>
    </div>
  );
};

const mapStateToProps = state =>
  console.log(state) || {
    questions: state.questions
  };

export default connect(mapStateToProps, {
  handleCorrectAnswer,
  handleWrongAnswer
})(Answers);
