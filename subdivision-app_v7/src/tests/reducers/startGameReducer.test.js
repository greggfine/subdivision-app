import * as constants from "../../actions";
import { startGameReducer } from "../../reducers/startGameReducer";

describe("startGameReducer", () => {
  test("it returns true on action START_GAME", () => {
    expect(
      startGameReducer(undefined, { type: constants.START_GAME })
    ).toBeTruthy();
  });
  test("it returns state if no action type", () => {
    const mockState = true;
    expect(startGameReducer(mockState, {})).toBeTruthy();
  });
});
