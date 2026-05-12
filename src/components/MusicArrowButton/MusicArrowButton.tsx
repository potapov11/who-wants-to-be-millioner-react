import { useMusicArrowButton } from "./useMusicArrowButton";
import "./MusicArrowButton.scss";

export const MusicArrowButton = () => {
  const { isPlaying, togglePlayback } = useMusicArrowButton();

  return (
    <button
      type="button"
      className={`arrow-music ${isPlaying ? "arrow-music-stop" : "arrow-music-play"}`}
      onClick={togglePlayback}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Выключить фоновую музыку" : "Включить фоновую музыку"}
    />
  );
};
