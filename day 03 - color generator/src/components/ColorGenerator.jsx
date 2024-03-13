import React, { useState } from "react";

const ColorGenerator = () => {
  const [hexColor, setHexColor] = useState(undefined);
  const [rgbColor, setRgbColor] = useState(undefined);

  const handleHexColor = () => {
    let color = (Math.random() * 0xfffff * 1000000).toString(16);
    setHexColor(`#${color.slice(0, 6)}`);
    setRgbColor(undefined);
  };
  const handleRgbColor = () => {
    let color = `rgb(${Math.round(Math.random() * 256)}, ${Math.round(
      Math.random() * 256
    )}, ${Math.round(Math.random() * 256)})`;
    setRgbColor(color);
    setHexColor(undefined);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="flex flex-col justify-center items-center bg-white shadow-lg w-[30rem] gap-4 p-4 rounded-lg">
        <h1 className="text-3xl">Generate a random color</h1>
        {hexColor ? (
          <div className="flex items-center gap-4 py-4">
            <div
              className="rounded-full w-12 h-12"
              style={{ backgroundColor: `${hexColor}` }}
            />
            <p>{hexColor}</p>
          </div>
        ) : null}
        {rgbColor ? (
          <div className="flex items-center gap-4 py-4">
            <div
              className="rounded-full w-12 h-12"
              style={{ backgroundColor: `${rgbColor}` }}
            />
            <p>{rgbColor}</p>
          </div>
        ) : null}

        <div className="flex gap-4">
          <button
            onClick={() => handleHexColor()}
            type="button"
            className="p-2 text-white bg-slate-700 hover:bg-slate-800 focus:outline-none font-medium rounded-lg text-sm shadow-md"
          >
            get hex
          </button>
          <button
            onClick={() => handleRgbColor()}
            type="button"
            className="p-2 text-white bg-slate-700 hover:bg-slate-800 focus:outline-none font-medium rounded-lg text-sm shadow-md"
          >
            get rgb
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
