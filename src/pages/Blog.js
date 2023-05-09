import React from 'react'

const Blog = ({bdata}) => {

    return (
        <div className='box_space'>
            <h2>Blog</h2>
            <div className='w-25 mx-auto'>
                <div className='d-flex justify-content-start align-items-center'>
                    <h3 className='text-start'>Blog:-</h3>
                    <p className='ms-3'>{bdata.blog}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog
