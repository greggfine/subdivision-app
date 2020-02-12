import * as constants from "../../actions";
import { scoreReducer } from "../../reducers/scoreReducer";

describe("scoreReducer", () => {
  const initialState = 0;
  test("it returns initial state if undefined", () => {
    expect(scoreReducer(undefined, {})).toEqual(initialState);
  });
  test("it adds 100 on HANDLE_CORRECT_ANSWER action", () => {
    expect(
      scoreReducer(100, { type: constants.HANDLE_CORRECT_ANSWER })
    ).toEqual(200);
  });
  test("it resets initialState to zero on PLAY_AGAIN action", () => {
    const mockState = 400;
    expect(scoreReducer(mockState, { type: constants.PLAY_AGAIN })).toEqual(0);
  });
});
