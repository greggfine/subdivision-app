import React from "react";
import { connect } from "react-redux";
import { getRandQuestion } from "./actions/getRandQuestionAction";

const Question = ({ questions, getRandQuestion }) => {
  return (
    <div>
      <h1>{questions["correctAnswer"]}</h1>
      <button onClick={() => getRandQuestion()}>Get Random Question</button>
    </div>
  );
};

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps, { getRandQuestion })(Question);
