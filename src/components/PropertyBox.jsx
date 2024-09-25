import React from 'react'

export default function PropertyBox({icon, name, item, property}) {
    if (!item || !item.current) {
        return <div className='property-box-container'>Loading...</div>
    }
  return (
    <div className='property-box-container'>
        <span className='icon'>{icon}</span>
        <div className='property-name-container'>
            <span>{name}</span>
            {property === "precipitation" ? (<span>{`${item.current.precip_in} mm`}</span>) : property === "humidity" ? (<span>{`${item.current.humidity} g/m³`}</span>) : property === "pressure" ? (<span>{`${item.current.pressure_in} mb`}</span>) :  (<span>{`${item.current.wind_kph} kph`}</span>) }
        </div>
    </div>
  )
}
