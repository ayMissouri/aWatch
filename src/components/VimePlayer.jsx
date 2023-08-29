import React, { useState, useRef } from "react";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import ReactHlsPlayer from "react-hls-player";
import { useEffect } from "react";

export default function VimePlayer({ video, subtitles }) {
  // const subs = subtitles?.map((item) => {
  //   return { lang: item.lang, language: item.lang, file: item.url };
  // });

  const ref = useRef(null);

  useEffect(() => {
    ref.current?.addEventListener("timeupdate", () => {
      console.log(ref.current?.currentTime);
    });
  }, []);

  return (
    <Player
      playerRef={ref}
      src={[
        {
          url: video[3]?.url,
          quality: "auto",
        },
        {
          url: video[0]?.url,
          quality: "1080p",
        },
        {
          url: video[1]?.url,
          quality: "720p",
        },
        {
          url: video[2]?.url,
          quality: "360p",
        },
      ]}
      // subtitles={subs}
      autoplay={true}
      pictureInPicture={true}
      enableWorker={true}
    >
      {(ref, props) => <ReactHlsPlayer playerRef={ref} {...props} />}
    </Player>
  );
}
