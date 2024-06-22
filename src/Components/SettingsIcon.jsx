import { IoMdSettings } from "react-icons/io";
function SettingsIcon({ onClick }) {
  return (
    <button onClick={onClick}>
      <IoMdSettings className="text-[#D7E0FF] hover:animate-spin" />
    </button>
  );
}

export default SettingsIcon;
