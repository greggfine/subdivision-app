import { PLAY_NEXT } from "../actions";

export const handlePlayNext = startStopTimes => {
  return {
    type: PLAY_NEXT,
    payload: startStopTimes
  };
};
