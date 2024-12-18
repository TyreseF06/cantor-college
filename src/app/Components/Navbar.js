'use client'
import Link from 'next/link';
import "./Navbar.css";
import React, { useState } from "react";

const Navbar = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <nav>
            <button className='burger' onClick={toggleMenu}>&#9776; </button>
            <menu className= {menuOpen ? "active" : ""}>
                <li>
                    <Link href='/' onClick={toggleMenu}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link href='/Courses' onClick={toggleMenu}>
                    Courses
                    </Link>
                </li>
                <li>
                    <Link href='/Students' onClick={toggleMenu}>
                    Student Information
                    </Link>
                </li>
                <li>
                    <Link href='/Facilities' onClick={toggleMenu}>
                    Facilities
                    </Link>
                </li>
                <li>
                    <Link href="/Learning-Resources" onClick={toggleMenu}>
                    Learning Resources
                    </Link>
                </li>
                <li className='right-text'>
                    <Link href="/Businesses" onClick={toggleMenu}>
                    Information for businesses
                    </Link>
                </li>
                <li>
                    <Link href="/About-Us" onClick={toggleMenu}>
                    About Us
                    </Link>
                </li>

            </menu>
      </nav>
    )
}
export default Navbar;