import * as constants from "../../actions";
import { playStateReducer } from "../../reducers/playStateReducer";

describe("playStateReducer", () => {
  test("it returns state if no action type", () => {
    const mockInitialState = true;
    expect(playStateReducer(mockInitialState, {})).toBe(true);
  });
  test("it returns action payload on SET_PLAY_STATE action type", () => {
    expect(
      playStateReducer(undefined, {
        type: constants.SET_PLAY_STATE,
        payload: true
      })
    ).toBe(true);
  });
});
