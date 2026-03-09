import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to autoplay when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay was prevented by browser
        console.log("Autoplay prevented. User interaction required.");
        setIsPlaying(false);
      }
    };

    playAudio();

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleUserInteraction = async () => {
    if (!isPlaying && audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/call-of-silence-reff.mp3"
      />

      {/* Click overlay to enable autoplay if needed */}
      {!isPlaying && (
        <div
          onClick={handleUserInteraction}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center cursor-pointer"
        >
          <div className="text-center space-y-4">
            <p className="text-foreground text-lg font-medium">
              Klik untuk memulai musik background
            </p>
            <Volume2 className="w-12 h-12 mx-auto text-primary animate-pulse" />
          </div>
        </div>
      )}

      {/* Mute/Unmute button */}
      {isPlaying && (
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
      )}
    </>
  );
};

export default BackgroundMusic;
