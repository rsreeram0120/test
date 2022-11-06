import React from 'react'
const Info = (props) => {
    const celsius = `°C`
    return (
        <div className='info'>
            {
                props.city && <p className='info_key'> <span className='info_value'>City: {props.city}</span></p>
            }
            {
                props.country && <p className='info_key'><span className='info_value'>Country: {props.country}</span></p>
            }
            {
                props.temperature && <p className='info_key'><span className='info_value'>Temperature: {props.temperature}{celsius}</span></p>
            }
            {
                props.description && <p className='info_key'><span className='info_value'>description: {props.description}</span></p>
            }
            {
                props.humidity && <p className='info_key'><span className='info_value'>Humidity: {props.humidity} g/kg</span></p>
            }
            {
                props.windSpeed && <p className='info_key'><span className='info_value'>WindSpeed: {props.windSpeed} M/S</span></p>
            }
            {
                props.error && <p className='info_key1'><span className='info_value'>Error: {props.error}</span></p>
            }
        </div>
    )
}


export default Info