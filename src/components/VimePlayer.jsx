import React, { useState, useRef } from "react";
import { Player, Ui, Hls, DefaultUi } from "@vime/react";

export default function VimePlayer({ video, subtitles, poster, previousTime }) {
  const player = useRef(null);
  const [currentTime, setCurrentTime] = useState(previousTime);

  const seekForward = () => {
    setCurrentTime(currentTime + 5);
  };

  const enterFullscreen = () => {
    player.current.enterFullscreen();
  };

  const onTimeUpdate = (CustomEvent) => {
    setCurrentTime(CustomEvent.detail);
  };

  const onFullscreenChange = (CustomEvent) => {
    const isFullscreen = CustomEvent.detail;
    // ...
  };

  // console.log(currentTime);

  const hlsConfig = {
    mediaTitle: "test",
  };

  return (
    <Player
      // controls
      theme="dark"
      style={{ "--vm-player-theme": "#e86c8b" }}
      autoplay
      ref={player}
      currentTime={currentTime}
      onVmCurrentTimeChange={onTimeUpdate}
      onVmFullscreenChange={onFullscreenChange}
    >
      <Hls version="latest" config={hlsConfig} poster=" ">
        <source data-src={video} type="application/x-mpegURL" />
        {subtitles?.map((item) => {
          return (
            <track
              kind="captions"
              src={item.url}
              srcLang={item.lang}
              label={item.lang}
              key={item.lang}
              default
            ></track>
          );
        })}
      </Hls>

      <Ui>
        <DefaultUi />
      </Ui>
    </Player>
  );
}
