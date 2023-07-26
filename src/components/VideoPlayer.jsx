import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";
import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";
import "../App.css";

const PlayButton = styled.button`
  width: 186px;
  height: 48px;
  margin-left: 7rem;
  transition: 0.5s ease-in-out;
  border-radius: 12px;
  color: black;
  font-weight: 500;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  &:hover {
    transform: scale(1.03);
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 1020px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const MobilePlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 3.5rem;
  background-color: rgba(255, 255, 255, 0.204);
  border: none;
  border-radius: 10%;
  font-size: 35px;
  cursor: pointer;
  @media screen and (min-width: 771px) {
    display: none;
  }
`;

const VideoPlayer = ({ streamingData }) => {
  console.log(streamingData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <MobilePlayButton onClick={handleOpenModal}>
        <i className="fa-solid fa-play" style={{ fontSize: "1.5rem" }}></i>
      </MobilePlayButton>
      <PlayButton onClick={handleOpenModal}>
        <i
          className="fa-solid fa-play"
          style={{ color: "#000", marginRight: "5px" }}
        ></i>
        Play now
      </PlayButton>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <i className="fa-solid fa-x" onClick={handleCloseModal}></i>
        <MediaPlayer
          title={streamingData ? streamingData.title : " "}
          src={streamingData ? streamingData.sources[3].url : ""}
          // poster={streamingData ? streamingData.subtitles : ""}
          // aspect-ratio={16 / 9}
          crossorigin=""
        >
          <MediaOutlet>
            <MediaPoster />
            {streamingData?.subtitles.map((item) => {
              // console.log(item.lang);
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
          </MediaOutlet>
          <MediaCommunitySkin />
        </MediaPlayer>
      </Modal>
    </div>
  );
};

export default VideoPlayer;
