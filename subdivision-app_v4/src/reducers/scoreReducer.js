import { HANDLE_CORRECT_ANSWER, PLAY_AGAIN } from "../actions";

export const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case HANDLE_CORRECT_ANSWER:
      return state + 100;
    case PLAY_AGAIN:
      return 0;
    default:
      return state;
  }
};

/* 
a button click triggers the next
audio play

*/
