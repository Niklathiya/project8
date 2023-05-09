import React from 'react'

const Contact = ({cdata}) => {
    return (
        <div className='box_space'>
            <h2>Contact us</h2>
            <div className='w-25 mx-auto'>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3 className='text-start'>Contact:-</h3>
                    <p className='ms-3'>{cdata.contact}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
