import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './../../css/Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar-container main'>
            <div className='navbar '>
                <div className='logo'>
                    <div><span className='hero-logo-1'>YOUTH</span> <span className='hero-logo-2'>MM</span></div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/">Posts</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/">Login</Link>
                    </li>
                    <li className='text-light nav-item'>|</li>
                    <li className='nav-item'>
                        <Link to="/">Register</Link>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar