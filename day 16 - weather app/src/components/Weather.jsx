import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [inputValue, setInputValue] = useState("");

  const getWeather = async () => {
    if (!city) return;
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchCity = () => {
    if (inputValue.trim()) {
      setCity(inputValue);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchCity();
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  useEffect(() => {
    if (city.trim()) {
      console.log(weather);
    }
  }, [weather]);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-slate-800 py-6 px-8 w-[85%] md:w-[28rem] rounded-xl shadow-lg flex flex-col justify-center items-center">
        {/* Search Bar */}
        <div className="w-full flex flex-row justify-between py-2">
          <input
            type="text"
            placeholder="Enter city name"
            className="focus:outline-none w-[75%] pl-3 text-lg rounded-lg"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="rounded-full bg-white p-2 "
            onClick={() => searchCity()}
          >
            <MdSearch className="text-2xl text-black" />
          </button>
        </div>
        {/* Weather Info */}
        <div
          className="w-full"
          style={{
            opacity: weather.cod === 200 ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            maxHeight: weather.cod === 200 ? "1000px" : "0", // Helps with sliding effect
            overflow: "hidden",
            transform:
              weather.cod === 200 ? "translateY(0)" : "translateY(-20px)",
            // eslint-disable-next-line no-dupe-keys
            transition: "all 0.5s ease-out", // Adjusts both opacity and transform
          }}
        >
          {weather.cod !== 200 ? null : (
            <div className="w-full flex flex-col justify-center items-center">
              <div className="pt-6 max-w-[50%]">
                <img
                  src={`images/${weather.weather[0].main.toLowerCase()}.png`}
                  alt="weather"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="text-white text-center pb-14 pt-2 flex flex-col gap-2">
                <h1 className="text-5xl md:text-6xl font-semibold">
                  {Math.round(weather.main.temp)}°C
                </h1>
                <h2 className="text-3xl md:text-4xl">{weather.name}</h2>
              </div>
              {/* Humidity and Wind Speed */}
              <div className="text-white flex flex-row justify-between w-full">
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8">
                    <img
                      src="/images/humidity.png"
                      alt="humidity"
                      className="max-w-full h-auto"
                    />
                  </div>

                  <div className="flex flex-col text-sm lg:text-md">
                    <p>{weather.main.humidity} %</p>
                    <p className="font-semibold">Humidity</p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-8">
                    <img
                      src="/images/wind.png"
                      alt="wind"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <div className="flex flex-col text-sm lg:text-md">
                    <p>{weather.wind.speed} km/h</p>
                    <p className="font-semibold">Wind Speed</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {weather.cod === "404" && (
        <div className="text-red-600 pt-6">
          City not found, please try again.
        </div>
      )}
    </div>
  );
};

export default Weather;
