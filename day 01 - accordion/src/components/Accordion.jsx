import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState([]);

  function handleSingleSelection(id) {
    setSelected(
      selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id]
    );
  }

  function handleMultipleSelected() {
    setSelected(
      selected.length === data.length ? [] : data.map((item) => item.id)
    );
  }

  return (
    <div className="wrapper flex flex-col justify-center items-center h-full">
      <button
        onClick={() => handleMultipleSelected()}
        className="border border-gray-600 px-2 py-1 rounded-md mb-4"
      >
        Show All
      </button>
      <div className="accordian flex flex-col w-[30rem] gap-6">
        {
          // checks if data exists
          data && data.length > 0 ? (
            data.map((item) => (
              <div className="item flex flex-col gap-4" key={item.id}>
                <div
                  onClick={() => handleSingleSelection(item.id)}
                  className="flex justify-between px-2 py-2 rounded-md bg-sky-300 cursor-pointer"
                >
                  <h3>{item.question}</h3>
                  <span>{selected.includes(item.id) ? "-" : "+"}</span>
                </div>
                {selected.includes(item.id) ? (
                  <div className="p-2 border border-gray-600 rounded-md">
                    <p className="content">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )
        }
      </div>
    </div>
  );
};

export default Accordion;
