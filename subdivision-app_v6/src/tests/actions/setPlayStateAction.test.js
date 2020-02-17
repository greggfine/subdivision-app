import * as constants from "../../actions";
import { setPlayState } from "../../action-creators/setPlayState";

describe("setPlayState", () => {
  test("it returns an obj with type and payload", () => {
    const mockPlayState = true;
    expect(setPlayState(mockPlayState)).toEqual({
      type: constants.SET_PLAY_STATE,
      payload: true
    });
  });
});
