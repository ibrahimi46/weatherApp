import React, { useEffect, useState } from "react";

import { WiHumidity, WiBarometer, WiCloudyGusts } from "react-icons/wi";
import { IoRainySharp } from "react-icons/io5";

import "./App.css";

import Navbar from "./components/Navbar";
import DescriptionBox from "./components/DescriptionBox";
import PropertyBox from "./components/PropertyBox";

export default function App() {
  const [newData, setNewData] = useState();
  const [errors, setErrors] = useState();
  const [unit, setUnit] = useState("C");
  const [selectedCity, setSelectedCity] = useState("Jeddah");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${selectedCity}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e7808f3c3bmsh331fae8eb35ae7dp159ba3jsnf83697506199",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setNewData(result);
    } catch (error) {
      setErrors(error);
      console.log(errors);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCity]);

  function triggerReload() {
    setSelectedCity(city);
    setCity("");
  }
  function handleTheme() {
    setTheme(!theme);
    console.log(theme);
  }
  return (
    <div className={`wrapper ${theme ? "light-mode" : "dark-mode"}`}>
      <Navbar
        setUnit={setUnit}
        triggerReload={triggerReload}
        setCity={setCity}
        city={city}
        handleTheme={handleTheme}
      />
      {loading ? (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <DescriptionBox item={newData} unit={unit} />
          <div className="property-box-wrapper">
            <PropertyBox
              icon={<WiHumidity />}
              name={"Humidity"}
              item={newData}
              property={"humidity"}
            />
            <PropertyBox
              icon={<IoRainySharp />}
              name={"Precipitation"}
              item={newData}
              property={"precipitation"}
            />
            <PropertyBox
              icon={<WiCloudyGusts />}
              name={"Wind"}
              item={newData}
              property={"wind"}
            />
            <PropertyBox
              icon={<WiBarometer />}
              name={"Pressure"}
              item={newData}
              property={"pressure"}
            />
          </div>
        </>
      )}
    </div>
  );
}
