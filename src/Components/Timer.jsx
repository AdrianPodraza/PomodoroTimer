import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useEffect } from "react";

function Timer({ color, state }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0); // Added key state to force reset the timer
  const [size, setSize] = useState(() =>
    Math.min(Math.max(window.innerWidth * 0.4, 200), 339),
  ); // Set initial size with min (200px) and max (339px) constraints

  const { activeTimer, pomodoroTimer, shortBreakTimer, longBreakTimer } = state;

  const duration =
    activeTimer === "pomodoro"
      ? pomodoroTimer * 60
      : activeTimer === "shortBreak"
        ? shortBreakTimer * 60
        : longBreakTimer * 60;

  // Effect to reset the timer whenever the activeTimer changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Change the key to force timer reset
  }, [activeTimer, pomodoroTimer, shortBreakTimer, longBreakTimer]);

  // Effect to handle resizing
  useEffect(() => {
    const handleResize = () => {
      setSize(Math.min(Math.max(window.innerWidth * 0.4, 200), 339)); // Update size with min (200px) and max (339px) constraints
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <div className="sm:text-2xlg flex flex-col items-center text-[60px] font-bold text-[#D7E0FF] lg:text-[40px]">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="kumbh text-lg tracking-[15px] sm:text-sm"
        >
          {isPlaying ? "PAUSE" : "RESUME"}
        </button>
      </div>
    );
  };

  return (
    <div
      className="shadow-bot rounded-full"
      style={{ width: size, height: size }}
    >
      <div className="shadow-top w-fit rounded-full bg-gradient-to-tl from-[#2E325A] to-[#0E112A] p-4">
        <div className="w-fit rounded-full bg-[#161932] p-3">
          <CountdownCircleTimer
            key={key}
            trailStrokeWidth={0}
            isPlaying={isPlaying}
            strokeWidth={12}
            rotation="counterclockwise"
            duration={duration}
            colors={[color, "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            size={size} // Set size dynamically
          >
            {children}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  );
}

export default Timer;
