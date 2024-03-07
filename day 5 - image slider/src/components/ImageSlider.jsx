/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(
          data.map((item) => {
            return item.download_url;
          })
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (url !== "" || url !== undefined) {
      fetchImages(url);
    }
  }, [url]);

  const handleNextSlide = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleLastSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNavImg = (index) => {
    console.log(index);
    setCurrentSlide(index);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[40rem]">
        <img className="rounded" src={images[currentSlide]} alt="slider" />
        <div className="flex gap-4 justify-center pt-6">
          {images.map((_, id) => (
            <div
              className={`${
                currentSlide === id ? "bg-slate-400" : "bg-slate-200"
              } w-4 h-4 rounded-full cursor-pointer`}
              key={id}
              onClick={() => handleNavImg(id)}
            ></div>
          ))}
        </div>

        <div className="flex flex-row gap-4 pt-6 justify-center">
          <button
            onClick={() => handleLastSlide()}
            className="p-1 w-20 bg-gray-800 hover:bg-gray-600 rounded text-white"
          >
            previous
          </button>
          <button
            onClick={() => handleNextSlide()}
            className="p-1 w-20 bg-gray-800 hover:bg-gray-600 rounded text-white"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
