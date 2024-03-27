import { useRef, useState } from "react";
import useClick from "../hooks/useClick";

const Click = () => {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useClick(ref, () => setShowContent(false));
  return (
    <div ref={ref} className="flex flex-col justify-center items-center">
      {showContent ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            This Is The Custom Click Hook
          </h1>
          <p className="text-lg">
            Click anywhere outside of thix text to close it.
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
