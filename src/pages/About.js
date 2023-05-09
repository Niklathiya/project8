import React from 'react'

const About = ({adata}) => {
    return (
        <div className='box_space'>
            <h2>About</h2>
            <div className='w-25 mx-auto'>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3 className='text-start'>About:-</h3>
                    <p className='ms-3'>{adata.about}</p>
                </div>
            </div>
        </div>
    )
}

export default About
