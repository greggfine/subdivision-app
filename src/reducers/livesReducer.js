export const livesReducer = (state = 3, action) => {
  switch (action.type) {
    case "HANDLE WRONG ANSWER":
      return state - 1;
    case "PLAY_AGAIN":
      return 3;
    default:
      return state;
  }
};
