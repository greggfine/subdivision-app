import { HANDLE_WRONG_ANSWER, PLAY_AGAIN } from "../actions";

export const livesReducer = (state = 3, action) => {
  switch (action.type) {
    case HANDLE_WRONG_ANSWER:
      return state - 1;
    case PLAY_AGAIN:
      return 3;
    default:
      return state;
  }
};
