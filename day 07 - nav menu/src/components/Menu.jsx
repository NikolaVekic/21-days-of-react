import React, { useState } from "react";

const Menu = ({ item }) => {
  const hasChildren = item.children && item.children.length > 0;
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="text-white">
      <div
        className="cursor-pointer w-full whitespace-nowrap py-2 px-2"
        onClick={() => handleShowMenu()}
      >
        <p className="hover:underline text-xl px-2">{item.label}</p>
      </div>
      {hasChildren && showMenu ? (
        <div className="pl-6">
          {item.children.map((child) => (
            <Menu key={child.label} item={child} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
