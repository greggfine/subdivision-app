export const gameOverReducer = (state = false, action) => {
  switch (action.type) {
    case "GAME_OVER":
      return true;
    case "PLAY_AGAIN":
      return false;
    default:
      return state;
  }
};
