import React from "react";
import Scroll from "./components/Scroll";

const App = () => {
  return (
    <div>
      <Scroll url="https://dummyjson.com/quotes?limit=100" />
    </div>
  );
};

export default App;
