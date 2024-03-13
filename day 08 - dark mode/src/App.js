import React from "react";
import DarkMode from "./hooks/DarkMode";

const App = () => {
  const [theme, toggleTheme] = DarkMode();

  const themeStyles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "10px",
    transition: "all 0.3s ease",
  };

  return (
    <div
      className="h-screen flex justify-center items-center text-center"
      style={themeStyles}
    >
      <div>
        <h1 className="text-4xl">Hello👋</h1>
        <button className="mt-4" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default App;
