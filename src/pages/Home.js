import React from 'react'

const Home = ({ data }) => {

    return (
        <div className='box_space'>
            <h1>Home</h1><hr />
            <h3>Personal Detail</h3>
            <div className='w-25 mx-auto'>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3 className='text-start'>Work:-</h3>
                    <p className='ms-3'>{data.work}</p>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3 className='text-start'>Hobby:-</h3>
                    <p className='ms-3'>{data.hobby}</p>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3>Address:-</h3>
                    <p className='ms-3'>{data.address}</p>
                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3>Favorite line:-</h3>
                    <p className='ms-3'>{data.fav_line}</p>
                </div>
            </div>
        </div>
    )
}

export default Home
