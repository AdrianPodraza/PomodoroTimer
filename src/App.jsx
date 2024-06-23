import { useReducer, useEffect } from "react";
import Bar from "./Components/Bar";
import Settings from "./Components/Settings";
import SettingsIcon from "./Components/SettingsIcon";
import Timer from "./Components/Timer";
import Title from "./Components/Title";

const initialState = {
  showSettings: false,
  activeFont: "kumbh-sans",
  activeColor: "#F87070",
  activeTimer: "pomodoro",
  pomodoroTimer: 25,
  shortBreakTimer: 5,
  longBreakTimer: 15,
};

function settingsReducer(state, action) {
  let newState;
  switch (action.type) {
    case "TOGGLE_SETTINGS":
      newState = { ...state, showSettings: !state.showSettings };
      break;
    case "SET_FONT":
      newState = { ...state, activeFont: action.payload };
      break;
    case "SET_COLOR":
      newState = { ...state, activeColor: action.payload };
      break;
    case "SET_POMODORO_TIMER":
      newState = { ...state, pomodoroTimer: action.payload };
      break;
    case "SET_SHORT_BREAK_TIMER":
      newState = { ...state, shortBreakTimer: action.payload };
      break;
    case "SET_LONG_BREAK_TIMER":
      newState = { ...state, longBreakTimer: action.payload };
      break;
    case "UPDATE_SETTINGS":
      newState = { ...state, ...action.payload };
      break;
    case "SET_ACTIVE_TIMER":
      newState = { ...state, activeTimer: action.payload };
      break;
    default:
      newState = state;
      break;
  }
  localStorage.setItem("userSettings", JSON.stringify(newState)); // Save the new state to localStorage
  return newState;
}

function App() {
  const [state, dispatch] = useReducer(
    settingsReducer,
    initialState,
    (initial) => {
      const persisted = localStorage.getItem("userSettings");
      return persisted ? JSON.parse(persisted) : initial;
    },
  );

  function handleShowSettings() {
    dispatch({ type: "TOGGLE_SETTINGS" });
  }

  return (
    <div
      className={`-z-[2] flex h-screen w-screen flex-col items-center justify-around bg-[#1E213F] ${state.activeFont} p-5`}
    >
      <Title />
      <Bar
        color={state.activeColor}
        activeTimer={state.activeTimer}
        dispatch={dispatch}
      />
      <Timer color={state.activeColor} state={state} />
      <SettingsIcon onClick={handleShowSettings} />
      <Settings
        state={state}
        dispatch={dispatch}
        onClick={handleShowSettings}
      />
    </div>
  );
}

export default App;
