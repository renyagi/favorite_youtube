import React, { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

interface VideoThumbnail_Props {
  thumbnail: string;
  previewVideo: string;
}

const VideoThumbnail: React.FC<VideoThumbnail_Props> = ({
  thumbnail = "https://files.oaiusercontent.com/file-Se8NLv3wUNT2g47mup9w3AZY?se=2024-09-14T06%3A45%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D66318a9f-8338-4726-bf24-9da49d493056.webp&sig=TCT5gPC/hNcJfMGvxEjU/Gbk8sTVd5mrYQfF8t7pGfs%3D",
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
