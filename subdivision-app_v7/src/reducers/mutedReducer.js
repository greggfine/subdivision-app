import { TOGGLE_MUTED, PLAY_AGAIN } from "../actions";

const initState = false;

export const mutedReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_MUTED:
      return !state;
    case PLAY_AGAIN:
      return initState;
    default:
      return initState;
  }
};
