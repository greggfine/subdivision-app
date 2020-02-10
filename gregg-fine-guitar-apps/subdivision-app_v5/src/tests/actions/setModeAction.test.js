import * as constants from "../../actions";
import { setMode } from "../../action-creators/setMode";

describe("setMode", () => {
  test("it returns an obj with type and payload", () => {
    const mode = "Easy";
    expect(setMode(mode)).toEqual({
      type: constants.SET_MODE,
      payload: "Easy"
    });
  });
});
