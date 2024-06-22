function FontChange({ state, setState }) {
  const fonts = [
    { id: 1, font: "kumbh-sans" },
    { id: 2, font: "roboto-slab" },
    { id: 3, font: "space-mono" },
  ];

  const handleFontChange = (font) => {
    setState((prevState) => ({
      ...prevState,
      activeFont: font,
    }));
  };

  return (
    <div className="la flex items-center justify-between border-b-2 border-[#E3E1E1] py-6">
      <h2 className="text-xs font-bold tracking-[5px]">FONT</h2>
      <div className="flex gap-2">
        {fonts.map((item) => (
          <div
            key={item.id}
            className={`${item.font} relative grid h-10 w-10 cursor-pointer place-items-center rounded-full ${
              state.activeFont === item.font
                ? "bg-[#161932] text-white ring-2 ring-black ring-offset-2"
                : "bg-[#EFF1FA]"
            }`}
            onClick={() => handleFontChange(item.font)}
          >
            Aa
          </div>
        ))}
      </div>
    </div>
  );
}

export default FontChange;
