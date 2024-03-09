import React from "react";
import LoadMore from "./components/LoadMore";

const App = () => {
  return (
    <div>
      <LoadMore
        url={"https://picsum.photos/v2/list?page=3&limit="}
        limit={"80"}
      />
    </div>
  );
};

export default App;
