import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.play().catch(() => {});
    };

    tryPlay();

    // If autoplay blocked, play on first user interaction
    const onInteraction = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", onInteraction);
      window.removeEventListener("keydown", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
    };

    window.addEventListener("click", onInteraction);
    window.addEventListener("keydown", onInteraction);
    window.addEventListener("touchstart", onInteraction);

    return () => {
      audio.pause();
      window.removeEventListener("click", onInteraction);
      window.removeEventListener("keydown", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/call-of-silence-reff.mp3"
      />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary/10 hover:bg-primary/20 backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-primary" />
        ) : (
          <Volume2 className="w-5 h-5 text-primary" />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;

export default BackgroundMusic;
