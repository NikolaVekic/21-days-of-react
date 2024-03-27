import React from "react";
import useFetch from "./hooks/useFetch.jsx";

const App = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center gap-6 py-4">
        <h1 className="text-3xl font-semibold">Custom API Fetch Hook</h1>
        {error && <p>Error: {error.message}</p>}
        {!loading &&
          data &&
          data.products &&
          data.products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="border-2 border-black w-[22rem] text-center rounded-lg p-2 mt-2 cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <h3 className="text-lg font-normal">
                <span className="font-semibold">Product — </span>
                {product.title}
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
