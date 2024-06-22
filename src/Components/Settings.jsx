import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import InputField from "./InputField";
import FontChange from "./FontChange";
import ThemeChange from "./ThemeChange";
import ApplyButton from "./ApplyButton";

function Settings({ onClick, state, dispatch }) {
  const { showSettings } = state;
  const [localState, setLocalState] = useState({ ...state });

  // Sync local state with global state when settings are shown
  useEffect(() => {
    if (showSettings) {
      setLocalState({ ...state });
    }
  }, [state, showSettings]);

  const handleApply = () => {
    dispatch({ type: "UPDATE_SETTINGS", payload: localState });
    onClick(); // Close settings after applying changes
  };

  return (
    showSettings && (
      <div className="fixed z-10 flex w-[540px] flex-col rounded-lg bg-white">
        <div className="flex w-full items-center justify-between border-b-2 border-[#E3E1E1] p-7">
          <p className="text-2xl font-bold">Settings</p>
          <button onClick={onClick}>
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col gap-3 px-7 pt-7">
          <span className="text-xs font-bold tracking-[5px]">
            Time (Minutes)
          </span>
          <div className="flex gap-3 border-b-2 border-[#E3E1E1] pb-6">
            <InputField
              field="pomodoroTimer"
              value={localState.pomodoroTimer}
              setState={setLocalState}
              title="pomodoro"
            />
            <InputField
              field="shortBreakTimer"
              value={localState.shortBreakTimer}
              setState={setLocalState}
              title="short Break"
            />
            <InputField
              field="longBreakTimer"
              value={localState.longBreakTimer}
              setState={setLocalState}
              title="long Break"
            />
          </div>
          <FontChange state={localState} setState={setLocalState} />
          <ThemeChange state={localState} setState={setLocalState} />
          <ApplyButton onClick={handleApply} />
        </div>
      </div>
    )
  );
}

export default Settings;
