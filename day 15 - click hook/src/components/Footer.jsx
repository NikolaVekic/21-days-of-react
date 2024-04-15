import React, { useEffect, useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(null);
  const time = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  useEffect(() => {
    if (time >= openHour && time <= closeHour) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [time]);

  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          — We're currently {open ? "closed" : "open"}!
        </p>
        {!open ? <button className="btn">Order</button> : null}
      </div>
    </footer>
  );
};

export default Footer;
