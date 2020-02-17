import React from "react";
import { connect } from "react-redux";
import { setMode } from "../../action-creators/setMode";
import { Form, Radio } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./levels.scss";

export const Levels = ({ level, setMode }) => {
  return (
    <Form>
      <Form.Field>
        <h1>Set Your Mode</h1>
      </Form.Field>
      <Form.Field>
        <Radio
          label="easy"
          name="radioGroup"
          value="Easy"
          checked={level.mode === "Easy"}
          onChange={() => setMode("Easy")}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="hard"
          name="radioGroup"
          value="Hard"
          checked={level.mode === "Hard"}
          onChange={() => setMode("Hard")}
        />
      </Form.Field>
    </Form>
  );
};

const mapStateToProps = ({ level }) => ({ level });

export default connect(mapStateToProps, { setMode })(Levels);

Levels.propTypes = {
  level: PropTypes.object,
  setLevel: PropTypes.func
};
