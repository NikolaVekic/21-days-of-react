import React from "react";
import data from "./data.js";
import Menu from "./Menu.jsx";

const Nav = ({ list = data }) => {
  return (
    <div className="w-[max-content]">
      {list && list.length > 0 ? (
        <div className="bg-slate-800 rounded">
          {list.map((listItem) => (
            <Menu item={listItem} key={listItem.label} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
