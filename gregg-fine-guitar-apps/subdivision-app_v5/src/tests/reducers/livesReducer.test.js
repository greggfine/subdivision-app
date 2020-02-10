import * as constants from "../../actions";
import { livesReducer } from "../../reducers/livesReducer";

describe("livesReducer", () => {
  const initialState = 3;
  test("it returns initialState if undefined", () => {
    expect(livesReducer(undefined, {})).toEqual(initialState);
  });
  test("it decrements state by 1 on action HANDLE_WRONG_ANSWER", () => {
    expect(livesReducer(2, { type: constants.HANDLE_WRONG_ANSWER })).toEqual(1);
  });
  test("It resets the initial state on PLAY_AGAIN", () => {
    expect(livesReducer(initialState, { type: constants.PLAY_AGAIN })).toEqual(
      initialState
    );
  });
});
