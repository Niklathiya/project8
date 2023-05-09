import React from 'react'

const Help = ({hdata}) => {
    return (
        <div className='box_space'>
            <h2>Help</h2>
            <div className='w-25 mx-auto'>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3 className='text-start'>Help:-</h3>
                    <p className='ms-3'>{hdata.help}</p>
                </div>
            </div>
        </div>
    )
}

export default Help
