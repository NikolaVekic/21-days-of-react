import React, { useEffect, useState } from "react";

const Tabs = ({ url, tabs }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);

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

  const handleTabs = (id) => {
    setCurrentTab(id);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <div className="flex flex-col  items-center pt-32 bg-[#EEEEEE] text-[#222831] min-h-screen">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <div
            key={tab.tab}
            className="text-md lg:text-2xl font-semibold border-2 border-black rounded p-2 cursor-pointer shadow"
            onClick={() => handleTabs(tab.tab)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 items-center py-12">
        {loading ? (
          <h2>Loading data...</h2>
        ) : (
          data.map(
            (quote) =>
              quote.id === currentTab && (
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
              )
          )
        )}
      </div>
    </div>
  );
};

export default Tabs;
