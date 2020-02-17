import { SET_MODE } from "../actions";

export const setMode = mode => {
  return { type: SET_MODE, payload: mode };
};
