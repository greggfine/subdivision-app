import {
  HANDLE_CORRECT_ANSWER,
  HANDLE_WRONG_ANSWER,
  PLAY_AGAIN
} from "../actions";

const initialState = 1;

export const chancesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CORRECT_ANSWER:
      return state + 1;
    case HANDLE_WRONG_ANSWER:
      return state + 1;
    case PLAY_AGAIN:
      return initialState;
    default:
      return state;
  }
};
