export const startGameReducer = (state = false, action) => {
  switch (action.type) {
    case "START_GAME":
      return true;
    default:
      return state;
  }
};
