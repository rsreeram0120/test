import React from 'react'
const Form = (props) => {
    return (
        <div className='form'>
            <h2 className='header'>Weather App</h2>
            <form onSubmit={props.handleSubmit} >
                <input type="text" placeholder='City...' name='city' />
                <input type="text" placeholder='Country...' name='country' />
                <button>Get Weather </button>
            </form>
        </div>
    )
}
export default Form