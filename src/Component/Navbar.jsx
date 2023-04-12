import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <div className="navbar">
            < div className="logo" >
                <h1>
                    Publishly
                </h1>
            </div >
            <div className={navbar ? "nav_list nav_list_block" : "nav_list"}>
                <nav>
                    <ul>
                        <li><a href="#mission">Our Mission</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="/">Write</a></li>
                        <li>
                            <Link to="/home">Sign in</Link>
                        </li>
                        <li><button>Get Started</button></li>
                    </ul>
                </nav>
            </div>
            <div className="hamburgur" onClick={() => setNavbar(!navbar)}>
                <FaBars />
            </div>
        </div >
    )
}

export default Navbar