/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const LoadMore = ({ url, limit }) => {
  const [items, setItems] = useState([]);
  const [start, setStart] = useState(0);
  const [limited, setLimited] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${limit}`);
        const data = await response.json();
        setItems(data.slice(start, limited));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limited]);

  const handleNext = () => {
    if (limited < parseInt(limit)) {
      setStart(start + 8);
      setLimited(limited + 8);
    }
  };
  const handlePrevious = () => {
    if (limited > 8) {
      setStart(start - 8);
      setLimited(limited - 8);
    }
  };

  const getLoading = () => {
    return <div className="col-span-4  ">Waiting for images to load...</div>;
  };

  console.log(items);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 gap-4">
        {loading
          ? getLoading()
          : items.map((item, id) => (
              <div
                className="border-2 border-gray-800 p-2 rounded w-[14rem] h-[14rem] flex flex-col items-center"
                key={id}
              >
                <div className="w-[12rem] h-[10rem]">
                  <img
                    src={item.download_url}
                    alt="product"
                    className="object-cover w-full h-full rounded"
                  />
                  <p className="text-center pt-2">
                    image #{limited > 8 ? id + 1 + (limited - 8) : id + 1}
                  </p>
                </div>
              </div>
            ))}
      </div>
      <div className="flex flex-row gap-6 pt-12">
        {limited > 8 ? (
          <button
            onClick={() => handlePrevious()}
            className="bg-gray-600 hover:bg-gray-800 text-white rounded px-3 py-1"
          >
            previous
          </button>
        ) : null}

        {limited < parseInt(limit) ? (
          <button
            onClick={() => handleNext()}
            className="bg-gray-600 hover:bg-gray-800 text-white rounded px-3 py-1 "
          >
            next
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMore;
