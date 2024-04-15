import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

function Menu() {
  const [open, setOpen] = useState(null);
  const time = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  useEffect(() => {
    if (time >= openHour && time <= closeHour) {
      setOpen(true); // Set open to true if current time is within opening hours
    } else {
      setOpen(false); // Set open to false if current time is outside opening hours
    }
  }, [time]);

  if (!open)
    return (
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00 PM.
      </p>
    );
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <Pizza />
    </div>
  );
}

export default Menu;
