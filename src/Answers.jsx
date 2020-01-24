import React from "react";
import { connect } from "react-redux";
import { shuffle } from "lodash";
import uuid from "uuid";
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from "./actions/handleAnswers";

const Answers = ({ questions, handleCorrectAnswer, handleWrongAnswer }) => {
  const generateBtns = () =>
    shuffle([
      <button key={uuid()} onClick={handleCorrectAnswer}>
        {questions["correctAnswer"]}
      </button>,
      <button key={uuid()} onClick={handleWrongAnswer}>
        {questions["wrongAnswer"]}
      </button>
    ]);
  return (
    <div className="answers">
      <div className="answer-btns">{generateBtns().map(button => button)}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps, {
  handleCorrectAnswer,
  handleWrongAnswer
})(Answers);
