import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function InputField({ title, state, setState, value, field }) {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue > 0) {
      setState((prevState) => ({
        ...prevState,
        [field]: newValue,
      }));
    }
  };

  const incrementValue = () => {
    setState((prevState) => ({
      ...prevState,
      [field]: prevState[field] + 1,
    }));
  };

  const decrementValue = () => {
    setState((prevState) => ({
      ...prevState,
      [field]: Math.max(1, prevState[field] - 1),
    }));
  };

  return (
    <div className="flex w-full flex-col gap-1">
      <span className="text-xs font-bold text-[#1E213F] opacity-25">
        {title}
      </span>
      <div className="relative flex">
        <input
          className="w-full rounded-xl border-none bg-[#EFF1FA] p-3 text-xs font-bold"
          type="number"
          min="1"
          value={value}
          onChange={handleChange}
        />
        <div className="absolute right-0 top-1/2 mr-3 flex -translate-y-1/2 flex-col">
          <button
            className="opacity-25 hover:animate-ping hover:cursor-pointer hover:opacity-100"
            onClick={incrementValue}
          >
            <IoIosArrowUp />
          </button>
          <button
            className="opacity-25 hover:animate-ping hover:cursor-pointer hover:opacity-100"
            onClick={decrementValue}
          >
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputField;
