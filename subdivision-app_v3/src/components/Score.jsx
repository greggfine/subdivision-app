import React from "react";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const Score = ({ score }) => {
  return (
    <div className="score">
      <Icon name="trophy" size="small" /> {score}
    </div>
  );
};

const mapStateToProps = state => ({
  score: state.score
});

export default connect(mapStateToProps)(Score);

Score.propTypes = {
  score: PropTypes.number
};
