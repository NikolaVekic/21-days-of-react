import React from "react";

const Modal = ({ handleModal }) => {
  return (
    <div className="fixed w-[80%] lg:max-w-[40rem] lg:h-[30rem] h-[60%] rounded-lg overflow-hidden shadow-2xl ">
      <div className="w-full lg:h-[20%] h-[15%] bg-gray-900 flex justify-center items-center">
        <button
          type="button"
          className="absolute top-0 right-0 mt-2 mr-3 text-xl leading-none text-white cursor-pointer"
          onClick={handleModal}
        >
          &times;
        </button>
        <h3 className="lg:text-4xl text-white text-lg font-semibold">
          Mastering Modals in React
        </h3>
      </div>
      <div className="w-full lg:h-[60%] h-[70%] bg-white flex flex-col justify-center lg:gap-6 lg:text-lg text-xl gap-6">
        <p className="px-4 pt-1">
          <span className="font-semibold">What are they: </span>Modals in React
          are UI components used to display content in a floating layer over the
          page.
        </p>
        <p className="px-4 pb-1">
          <span className="font-semibold">Usage: </span>They're ideal for
          confirmations, forms, or any content needing focus, enhancing your
          application's usability and responsiveness.
        </p>
      </div>
      <div className="w-full lg:h-[20%] h-[15%] bg-gray-900 flex justify-center items-center">
        <p className="lg:text-xl text-white font-light">
          Date — March 24, 2024
        </p>
      </div>
    </div>
  );
};

export default Modal;
