function ApplyButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="-mb-6 grid w-36 place-items-center place-self-center rounded-full bg-[#F87070] py-3 text-white"
    >
      Apply
    </button>
  );
}

export default ApplyButton;
