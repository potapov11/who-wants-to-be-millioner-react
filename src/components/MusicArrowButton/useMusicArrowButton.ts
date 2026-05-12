import { useCallback, useEffect, useState } from "react";
import { audioModel } from "@/model/audioModel";

export const useMusicArrowButton = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) {
      audioModel.stopPlayBackGroundMusic();
      return;
    }

    void audioModel.playBackGroundMusic().catch(() => {
      setIsPlaying(false);
    });

    return () => audioModel.stopPlayBackGroundMusic();
  }, [isPlaying]);

  const togglePlayback = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  return { isPlaying, togglePlayback };
};
