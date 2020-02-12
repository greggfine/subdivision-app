import React from "react";
import { connect } from "react-redux";
// import { setMode } from "../../action-creators/setMode";
import { Form, Radio } from "semantic-ui-react";

import "./levels.scss";

const Levels = ({ level, setMode }) => {
  return (
    <Form>
      <Form.Field>
        <h1>Set Your Mode</h1>
      </Form.Field>
      <Form.Field>
        <Radio
          label="easy"
          name="radioGroup"
          value="easy"
          checked={level.mode === "easy"}
          onChange={() => setMode("easy")}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="hard"
          name="radioGroup"
          value="hard"
          checked={level.mode === "hard"}
          onChange={() => setMode("hard")}
        />
      </Form.Field>
    </Form>
  );
};

const mapStateToProps = ({ level }) => ({ level });

export default connect(mapStateToProps, { setMode })(Levels);
