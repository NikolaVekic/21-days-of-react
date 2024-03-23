import React from "react";
import Tabs from "./components/Tabs";

const App = () => {
  const tabs = [
    { tab: 1, title: "Get Quote 1" },
    { tab: 2, title: "Get Quote 2" },
    { tab: 3, title: "Get Quote 3" },
  ];
  return (
    <div>
      <Tabs url="https://dummyjson.com/quotes?limit=100" tabs={tabs} />
    </div>
  );
};

export default App;
