import { SET_PLAY_STATE } from "../actions";

export const setPlayState = playState => {
  return {
    type: SET_PLAY_STATE,
    payload: playState
  };
};
