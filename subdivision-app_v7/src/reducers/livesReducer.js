import { HANDLE_WRONG_ANSWER, PLAY_AGAIN } from "../actions";

const initialState = 3;
// const initialState = 1;

export const livesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_WRONG_ANSWER:
      return state - 1;
    case PLAY_AGAIN:
      return initialState;
    default:
      return state;
  }
};
