export const numLivesReducer = (state = 3, action) => {
  switch (action.type) {
    case "INCREMENT LIVES":
      return state + 1;
    case "DECREMENT LIVES":
      return state - 1;
    default:
      return state;
  }
};
