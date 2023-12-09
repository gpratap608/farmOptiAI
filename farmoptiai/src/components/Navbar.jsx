'use client'
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  // Client-side rendering logic can be added here if needed
  
  return (
    <div>
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo">
            <img className='logoImage'
                src='/icon.jpg'
            />
            <h3>FarmOptiAI</h3>
        </div>

        {/* NAVIGATION MENU */}
        <ul className="nav-links">

          {/* USING CHECKBOX HACK */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

          {/* NAVIGATION MENUS */}
          <div className="menu">
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>

            <li className="services">
              <a href="#services">Services</a>

              {/* DROPDOWN MENU */}
              {/* <ul className="dropdown">
                <li><Link href="/services/dropdown1">Dropdown 1</Link></li>
                <li><Link href="/services/dropdown2">Dropdown 2</Link></li>
                <li><Link href="/services/dropdown3">Dropdown 3</Link></li>
                <li><Link href="/services/dropdown4">Dropdown 4</Link></li>
              </ul> */}
            </li>

            {/* <li><Link href="#">Pricing</Link></li> */}
            <li><Link href="#contact">Contact</Link></li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
