export const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case "HANDLE CORRECT ANSWER":
      return state + 100;
    default:
      return state;
  }
};
