import { HANDLE_CORRECT_ANSWER, PLAY_AGAIN } from "../actions";

const initialState = 0;

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CORRECT_ANSWER:
      return state + 100;
    case PLAY_AGAIN:
      return initialState;
    default:
      return state;
  }
};
