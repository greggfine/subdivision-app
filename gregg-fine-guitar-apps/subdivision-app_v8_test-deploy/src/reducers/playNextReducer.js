import { PLAY_NEXT } from "../actions";
import { shuffle } from "lodash";
import startStopTimes from "../util/startStopData";

const shuffledStartStopTimes = shuffle(startStopTimes);
// console.log("init", shuffledStartStopTimes);
const initState = {
  startStopTimes: shuffledStartStopTimes[0],
  wrongNotation: shuffledStartStopTimes[1]
};

export const playNextReducer = (state = initState, action) => {
  switch (action.type) {
    case PLAY_NEXT:
      //   console.log(action.payload);
      return {
        startStopTimes: action.payload.startStopTimes,
        wrongNotation: action.payload.wrongNotation
      };
    default:
      return state;
  }
};
