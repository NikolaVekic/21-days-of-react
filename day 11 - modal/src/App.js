import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-gray-800">
      <div>
        <h1 className="lg:text-4xl font-semibold">
          Discover More —
          <span
            onClick={handleModal}
            className="font-normal cursor-pointer border lg:border-2 border-black px-2 py-1 rounded-lg ml-3 hover:bg-gray-900 hover:text-white"
          >
            Click Here!
          </span>
        </h1>
      </div>
      {modal && <Modal handleModal={handleModal} />}
    </div>
  );
};

export default App;
