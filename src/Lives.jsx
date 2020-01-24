import React from "react";
import { connect } from "react-redux";

const Lives = ({ answer }) => {
  return <div>LIVES : {answer}</div>;
};

const mapStateToProps = state => ({
  answer: state.answer
});

export default connect(mapStateToProps)(Lives);
