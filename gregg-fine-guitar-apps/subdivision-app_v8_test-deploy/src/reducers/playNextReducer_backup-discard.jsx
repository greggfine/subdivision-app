import { PLAY_NEXT } from "../actions";
import { shuffle } from "lodash";
import startStopTimes from "../util/startStopData";

// We get an arr of objs(start, stop, notation)
// We then shuffle this array
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
      count++; // Relying on external variables, differnt each time
      randCount = Math.floor(Math.random() * shuffledStartStopTimes.length); //NON-PURE function
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

/* 
Reducers should be pure. 
i.e., given the same state, same result should be output

Never mutate its state arguments

*/

/* 
What is this reducer doing?
Looks like "count" and "randCount" are the manipulated things here


*/
