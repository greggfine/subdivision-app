import { GAME_OVER, PLAY_AGAIN } from "../actions";

export const gameOverReducer = (state = false, action) => {
  switch (action.type) {
    case GAME_OVER:
      return true;
    case PLAY_AGAIN:
      return false;
    default:
      return state;
  }
};
