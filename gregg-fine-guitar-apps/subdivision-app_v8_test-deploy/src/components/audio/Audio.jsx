import React from "react";

const Audio = (
  { handleToggleDisabled, level, muted, playNext, setPlayState },
  ref
) => {
  return (
    <audio
      src={`${level.loop}#t=00:00:${playNext.startStopTimes.start},00:00:${playNext.startStopTimes.stop}`}
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
};

export default React.forwardRef(Audio);
