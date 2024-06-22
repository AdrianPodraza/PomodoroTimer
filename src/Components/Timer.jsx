import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useEffect } from "react";

function Timer({ color, state }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0); // Added key state to force reset the timer

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

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <div className="flex flex-col items-center text-[100px] font-bold text-[#D7E0FF]">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="kumbh text-lg tracking-[15px]"
        >
          {isPlaying ? "PAUSE" : "RESUME"}
        </button>
      </div>
    );
  };

  return (
    <div className="shadow-bot rounded-full">
      <div className="shadow-top w-fit rounded-full bg-gradient-to-tl from-[#2E325A] to-[#0E112A] p-4">
        <div className="w-fit rounded-full bg-[#161932] p-3">
          <CountdownCircleTimer
            key={key}
            size={339}
            trailStrokeWidth={0}
            isPlaying={isPlaying}
            strokeWidth={12}
            rotation="counterclockwise"
            duration={duration}
            colors={[color, "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
          >
            {children}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  );
}

export default Timer;
