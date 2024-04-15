import React from "react";
import data from "../data.js";

function Pizza() {
  return (
    <ul className="pizzas">
      {data.map((pizza) => (
        <li
          key={pizza.name}
          className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
        >
          <img src={pizza.photoName} alt={pizza.name} />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.soldOut ? "SOLD OUT" : pizza.price + "$"}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Pizza;
