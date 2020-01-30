import { PLAY_NEXT } from "../actions";
import { shuffle } from "lodash";
import startStopTimes from "../util/startStopData";

const shuffledStartStopTimes = shuffle(startStopTimes);

let count = 0;
let randCount;
export const playNextReducer = (
  state = {
    startStopTimes: shuffledStartStopTimes[count],
    wrongNotation: shuffledStartStopTimes[count + 1]
  },
  action
) => {
  switch (action.type) {
    case PLAY_NEXT:
      count++;
      randCount = Math.floor(Math.random() * shuffledStartStopTimes.length);
      while (randCount === count) {
        randCount++;
      }
      return {
        startStopTimes: shuffledStartStopTimes[count],
        wrongNotation: shuffledStartStopTimes[randCount]
      };
    default:
      return state;
  }
};
