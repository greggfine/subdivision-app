export const chancesReducer = (state = 1, action) => {
  switch (action.type) {
    case "HANDLE CORRECT ANSWER":
      return state + 1;
    case "HANDLE WRONG ANSWER":
      return state + 1;
    case "PLAY_AGAIN":
      return 1;
    default:
      return state;
  }
};
