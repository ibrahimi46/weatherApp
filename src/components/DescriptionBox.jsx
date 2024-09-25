import React from 'react'

export default function DescriptionBox({item, unit}) {
    if (!item || !item.location) {
        return <div className='description-container'>Please Enter a valid City Name!</div>;
    }

    function formatTime(localtime) {
        const formattedDate = new Date(localtime).toLocaleDateString('en-us', 
        {weekday: "long",
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,})
        return formattedDate;
    }
  return (
    <div className='description-container'>
        <div className='location-container'>
            <span className='location-title'>{`${item.location.name},${item.location.country}`}</span>
            <span className='time'>{formatTime(item.location.localtime)}</span>
        </div>
        <div className='location-info-container'>
            <span className='weather-condition'>{item.current.condition.text}</span>
            <img src={item.current.condition.icon} alt='weather-icon'/>
            {unit === "C" ? (
                <div className='temperature-container'>
                <span>{`${item.current.temp_c}°`}</span>
                <div className='min-max'>
                    <span>{`Feels like ${item.current.feelslike_c}°`}</span>
                </div>
            </div>
            ) : (
                <div className='temperature-container'>
                <span>{`${item.current.temp_f}°`}</span>
                <div className='min-max'>
                    <span>{`Feels like ${item.current.feelslike_f}°`}</span>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}
