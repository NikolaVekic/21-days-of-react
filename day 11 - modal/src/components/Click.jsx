import { useRef, useState } from "react";
import useClick from "../hooks/useClick";

const Click = () => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useClick(ref, () => setShowContent(false));
  return (
    <div ref={ref} className="flex flex-col justify-center items-center">
      {showContent ? (
        <div className="relative text-center border border-black px-8 py-10 rounded-lg">
          <span
            className="absolute top-0 right-3 cursor-pointer text-xl font-semibold"
            onClick={() => setShowContent(false)}
          >
            &times;
          </span>
          <h1 className="text-2xl font-semibold">
            This Is a Custom Modal Popup
          </h1>
          <p className="text-lg pt-4">
            Click anywhere outside of this box, or the close button to hide this
            window.
          </p>
        </div>
      ) : (
        <buttons
          className="border border-black rounded-lg px-2 py-1 font-normal cursor-pointer"
          onClick={() => setShowContent(true)}
        >
          Show Content
        </buttons>
      )}
    </div>
  );
};

export default Click;
