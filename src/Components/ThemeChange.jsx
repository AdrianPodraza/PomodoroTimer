function ThemeChange({ state, setState }) {
  const colors = [
    { id: 1, color: "#F87070" },
    { id: 2, color: "#70F3F8" },
    { id: 3, color: "#D881F8" },
  ];

  const handleColorChange = (color) => {
    setState((prevState) => ({
      ...prevState,
      activeColor: color,
    }));
  };

  return (
    <div className="flex items-center justify-between py-6">
      <h2 className="text-xs font-bold tracking-[5px]">COLOR</h2>
      <div className="flex gap-2">
        {colors.map((item) => (
          <div
            key={item.id}
            className={`relative grid h-10 w-10 cursor-pointer place-items-center rounded-full ${
              state.activeColor === item.color
                ? "ring-2 ring-black ring-offset-2"
                : ""
            }`}
            style={{ backgroundColor: item.color }}
            onClick={() => handleColorChange(item.color)}
          >
            {state.activeColor === item.color && (
              <span className="absolute text-xl text-[#161932]">✓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeChange;
