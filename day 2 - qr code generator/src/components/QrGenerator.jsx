import React, { useState } from "react";

const QrGenerator = () => {
  const [qr, setQr] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [err, setErr] = useState(undefined);

  const handleQrSubmit = () => {
    if (!qr) {
      setErr("Please enter information in the input field.");
      setImage(undefined);
    } else {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`;
      setImage(url);
      setErr(undefined);
    }
  };

  const handleQrValue = (e) => {
    setQr(e.target.value);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="flex flex-col justify-center items-center bg-white shadow-lg w-[30rem] gap-4 p-4 rounded-lg">
        <h1 className="text-3xl">QR Code Generator</h1>
        <div className="relative w-75">
          <input
            onChange={(e) => handleQrValue(e)}
            type="text"
            placeholder="Enter QR Code Link"
            className="rounded-lg pl-3 pr-24 py-2 w-full focus:outline-none bg-slate-100 shadow-md"
          />
          <button
            onClick={() => handleQrSubmit()}
            className="absolute inset-y-0 right-0 px-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-r-lg text-sm shadow-md"
          >
            generate
          </button>
        </div>
        <div></div>
        {image ? (
          <div className="pb-4">
            <img src={image} alt="qr code" />
          </div>
        ) : null}

        {err ? <small className="text-red-600">{err}</small> : null}
      </div>
    </div>
  );
};

export default QrGenerator;
