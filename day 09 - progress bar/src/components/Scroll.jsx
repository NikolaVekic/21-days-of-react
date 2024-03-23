import React, { useEffect, useState } from "react";

const Scroll = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scroll, setScroll] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.quotes && data.quotes.length > 0) {
        setData(data.quotes);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScroll(Math.round((scroll / height) * 100));
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scroll);

  return (
    <div className="flex flex-col  items-center pt-32 bg-[#EEEEEE] text-[#222831] min-h-screen">
      <div className="fixed top-0 shadow-lg w-full bg-[#EEEEEE] h-8">
        <div
          className="h-full bg-[#F6995C] smooth-transition"
          style={{ width: `${scroll}%` }}
        >
          <p className="text-[#222831] pl-1">{scroll}%</p>
        </div>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold">Progress Bar </h1>
      <div className="flex flex-col gap-4 items-center py-12">
        {loading ? (
          <h2>Loading data...</h2>
        ) : (
          data.map((quote) => (
            <div
              key={quote.id}
              className="border-2 border-black p-4 rounded-lg w-[20rem] lg:w-[40rem] flex flex-col gap-2 shadow"
            >
              <div>
                <h3 className="text-lg lg:text-xl font-normal">
                  <span className="font-semibold">Author — </span>
                  {quote.author}
                </h3>
              </div>
              <div>
                <p className="text-lg lg:text-xl">
                  <span className="font-semibold">Quote — </span>
                  {quote.quote}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Scroll;
