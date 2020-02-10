import { SET_PLAY_STATE } from "../actions";

const initialState = false;

export const playStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAY_STATE:
      return action.payload;
    default:
      return state;
  }
};
