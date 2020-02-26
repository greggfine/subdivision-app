import React from "react";

import loop3 from "../../audio/loops/loop3.mp3";
import loop7 from "../../audio/loops/loop7.mp3";

const Audio = (
  { handleToggleDisabled, level, muted, playNext, setPlayState },
  ref
) => {
  {
    return level.mode === "Easy" ? (
      <audio
        src={`${loop3}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
        type="audio/mp3"
        onPlay={() => {
          setPlayState(true);
        }}
        onPause={() => {
          handleToggleDisabled();
          setPlayState(false);
        }}
        ref={ref}
        muted={muted}
        preload="auto"
      ></audio>
    ) : (
      <audio
        src={`${loop7}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
        type="audio/mp3"
        onPlay={() => {
          setPlayState(true);
        }}
        onPause={() => {
          handleToggleDisabled();
          setPlayState(false);
        }}
        ref={ref}
        muted={muted}
        preload="auto"
      ></audio>
    );
  }
};

export default React.forwardRef(Audio);
