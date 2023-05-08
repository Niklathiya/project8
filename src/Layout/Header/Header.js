import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className='header'>
                <div style={{width: "25%", display: "flex"}}>
                    <img src="image/selmon.jpg" width="80px" height="80px"/>
                    <h1 className='ms-3 pt-2'>Selmon Bhoi</h1>
                </div>
                <div style={{width: "75%"}}>
                    <ul className='d_flex'>
                        <li><Link to="/" className='list_align'>Home</Link></li>
                        <li><Link to="/About" className='list_align'>About</Link></li>
                        <li><Link to="/Service" className='list_align'>Service</Link></li>
                        <li><Link to="/Blog" className='list_align'>Blog</Link></li>
                        <li><Link to="/Contact" className='list_align'>Contact Us</Link></li>
                        <li><Link to="/Help" className='list_align'>Help</Link></li>
                        <li><Link to="/Crud1" className='list_align'>Crud1</Link></li>
                        <li><Link to="/Crud2" className='list_align'>Crud2</Link></li>
                        <li><Link to="/Crud2View" className='list_align'>Crud2View</Link></li>
                        <li><Link to="/Login" className='list_align text-danger'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
