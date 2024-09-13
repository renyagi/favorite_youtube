import React, { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

interface VideoThumbnail_Props {
  thumbnail: string;
  previewVideo: string;
}

const VideoThumbnail: React.FC<VideoThumbnail_Props> = ({
  thumbnail = "#",
  previewVideo = "#",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      onClick={handleVideoToggle}
      cursor="pointer"
    >
      <video
        ref={videoRef}
        width="100%"
        muted
        loop
        preload="metadata"
        style={{ display: "block" }}
        poster={thumbnail}
      >
        <source src={previewVideo} type="video/mp4" />
        お使いのブラウザはビデオをサポートしていません。
      </video>
    </Box>
  );
};

export type { VideoThumbnail_Props };
export { VideoThumbnail };
