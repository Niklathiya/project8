import React from 'react'

const Service = ({ sdata }) => {
    return (
        <div className='box_space'>
            <h2>Service</h2>
            <div className='w-25 mx-auto'>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3 className='text-start'>Service:-</h3>
                    <p className='ms-3'>{sdata.service}</p>
                </div>
            </div>
        </div>
    )
}

export default Service
