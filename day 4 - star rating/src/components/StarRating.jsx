import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ starNum = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarSelect = (currentIndex) => {
    setRating(currentIndex);
  };
  const handleMouseMove = (currentIndex) => {
    setHover(currentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="flex flex-col justify-center items-center bg-white shadow-lg w-[30rem] gap-4 p-4 py-6 rounded-lg">
        <h1 className="text-3xl">Star Rating</h1>
        <div className="flex gap-4">
          {[...Array(starNum)].map((_, index) => {
            index++;
            return (
              <FaStar
                key={index}
                onClick={() => handleStarSelect(index)}
                onMouseMove={() => handleMouseMove(index)}
                onMouseLeave={() => handleMouseLeave()}
                className={
                  index <= (hover || rating)
                    ? "cursor-pointer text-yellow-400"
                    : "cursor-pointer"
                }
                size={40}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StarRating;
