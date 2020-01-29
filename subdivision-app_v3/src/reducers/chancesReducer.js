import {
  HANDLE_CORRECT_ANSWER,
  HANDLE_WRONG_ANSWER,
  PLAY_AGAIN
} from "../actions";

export const chancesReducer = (state = 1, action) => {
  switch (action.type) {
    case HANDLE_CORRECT_ANSWER:
      return state + 1;
    case HANDLE_WRONG_ANSWER:
      return state + 1;
    case PLAY_AGAIN:
      return 1;
    default:
      return state;
  }
};
