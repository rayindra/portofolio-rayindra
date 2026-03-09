import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 1;
    audio.muted = false;

    const log = (...args: unknown[]) => console.log("[bg-audio]", ...args);

    const start = async (reason: string) => {
      try {
        audio.muted = false;
        audio.volume = 1;
        const p = audio.play();
        await p;
        log("playing", { reason });
        return true;
      } catch (err) {
        log("play blocked", { reason, err });
        return false;
      }
    };

    const interactionEvents: Array<keyof WindowEventMap> = [
      "pointerup",
      "touchend",
      "click",
      "keydown",
      "mouseup",
    ];

    const removeInteractionListeners = () => {
      interactionEvents.forEach((evt) => window.removeEventListener(evt, onInteraction));
    };

    const onPlaying = () => {
      log("event:playing");
      removeInteractionListeners();
    };

    const onError = () => {
      log("event:error", audio.error);
    };

    const onCanPlay = () => {
      log("event:canplay");
    };

    const onInteraction = () => {
      // IMPORTANT: only remove listeners after we actually start playing.
      start("interaction").then((ok) => {
        if (ok) removeInteractionListeners();
      });
    };

    // Try immediate autoplay (may be blocked on mobile)
    start("mount");

    // Fallback: start on the first qualifying user gesture (iOS often prefers touchend/pointerup)
    interactionEvents.forEach((evt) => window.addEventListener(evt, onInteraction));

    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("error", onError);
    audio.addEventListener("canplay", onCanPlay);

    return () => {
      audio.pause();
      removeInteractionListeners();
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setIsMuted((prev) => {
      audio.muted = !prev;
      return !prev;
    });
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
