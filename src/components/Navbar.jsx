import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";

export default function Navbar({setUnit, triggerReload, setCity, city, handleTheme}) {
  function handleUnit(value) {
      setUnit(value);
  }
  return (
    <div className='navigation-container'>
        <div className='search-bar'>
            <FiSearch onClick={triggerReload}/>
            <input onKeyDown={e => {
              if (e.key === "Enter") {
                triggerReload();
                e.target.blur();
              }
            }} className='input-box' value={city} onChange={e => setCity(e.target.value)} type='text' placeholder='Search for a city...'/>
        </div>
        <div className='unit-change'>
            <div>
            <label className="switch">
            <input onChange={handleTheme} type="checkbox"/>
            <span className="slider"></span>
            </label>
            </div>
            <span onClick={() => handleUnit("C")} className='unit'>°C</span>
            <span onClick={() => handleUnit("F")} className='unit'>°F</span>
        </div>
    </div>
  )
}
