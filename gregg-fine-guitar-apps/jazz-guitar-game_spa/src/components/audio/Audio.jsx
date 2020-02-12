import React, { useState, useEffect, useRef } from "react";
import audio from "../../audio/cuts/al-di-meola_nena.mp3";

const Audio = () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  useEffect(() => {
    const getAudio = async () => {
      const fetchedAudio = await fetch(audio);
      const arrayBuff = await fetchedAudio.arrayBuffer();
      const decodedAudio = await ctx.decodeAudioData(arrayBuff);
      let myAudio = decodedAudio;
      bufferSrc.buffer = myAudio;
    };
    getAudio();
  }, []);

  const bufferSrc = ctx.createBufferSource();
  bufferSrc.connect(ctx.destination);
  bufferSrc.start();
  return <div>{/* <audio src={audio} autoPlay></audio> */}test</div>;
};

export default Audio;

// import React, { useState, useEffect } from "react";
// import audio from "../../audio/cuts/al-di-meola_nena.mp3";

// const ctx = new (window.AudioContext || window.webkitAudioContext)();
// let myAudio;

// fetch(audio)
//   .then(data => data.arrayBuffer())
//   .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
//   .then(decodedAudio => {
//     myAudio = decodedAudio;
//   });

// const Audio = () => {
//   useEffect(() => {
//     const bufferSrc = ctx.createBufferSource();
//     bufferSrc.buffer = myAudio;
//     bufferSrc.connect(ctx.destination);
//     bufferSrc.start();
//   }, []);
//   return <div>{/* <audio src={audio} autoPlay></audio> */}test</div>;
// };

// export default Audio;
