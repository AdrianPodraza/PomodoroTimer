import React from "react";

function Bar({ color, activeTimer, dispatch }) {
  const timers = [
    { id: "pomodoro", timer: "pomodoro" },
    { id: "shortBreak", timer: "short break" },
    { id: "longBreak", timer: "long break" },
  ];

  const handleTimerChange = (timerId) => {
    dispatch({ type: "SET_ACTIVE_TIMER", payload: timerId });
    dispatch({ type: "RESET_ELAPSED_TIME" });
  };

  return (
    <div className="z-10 flex rounded-full bg-[#161932] p-2">
      {timers.map((timer) => (
        <button
          onClick={() => handleTimerChange(timer.id)}
          key={timer.id}
          style={{
            backgroundColor: timer.id === activeTimer ? color : "transparent",
          }}
          className={timer.id === activeTimer ? "active" : "no-active"}
        >
          {timer.timer}
        </button>
      ))}
    </div>
  );
}

export default Bar;
