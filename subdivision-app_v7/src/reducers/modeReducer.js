import { SET_MODE } from "../actions";

import loop3 from "../audio/loops/loop3.mp3";
import loop7 from "../audio/loops/loop7.mp3";

// export const modeReducer = (state = { mode: "Easy", loop: loop3 }, action) => {
export const modeReducer = (state = { mode: "Easy", loop: loop7 }, action) => {
  switch (action.type) {
    case SET_MODE:
      if (action.payload === "Easy") {
        return {
          mode: action.payload,
          loop: loop3
        };
      } else {
        return {
          mode: action.payload,
          loop: loop7
        };
      }

    default:
      return state;
  }
};
