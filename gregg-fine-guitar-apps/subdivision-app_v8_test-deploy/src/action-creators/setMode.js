import { SET_MODE } from "../actions";
import { store } from "../index";

export const setMode = mode => {
  console.log(store.getState());
  return { type: SET_MODE, payload: mode };
};
