// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/20e2/3ef0/428455a7b1d6a1472887cd26db0c3b9c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JK0Ql7bDNPug6RLGZm-na-vc7sMgCKPUM-ubU-rh61fUb9LuDAed3tfrnczHviSTQPmm2ikrYX-Vz0bRHZWjQwjRcEVNhLLJHTN4F9v7l7nxCxHA1YD-PE0TpFM4iVCFQKLxH3gr6HJ50S0p6nJwQGtcN9Wzb5qXsKMK7jgMrvkQDTGBj1Q~UwKnad40~tgpI2VMJ0zZpmgWRODJho-7TlE842sIX~RS7iDJnqL-ZhGvHgTn4D-1ULFKJTnc0q3WNTTpLJZMpXzVhVMemWc9Ms7m-zbmkty8o19hZ3oZ0ZURk2IAS1AAWPi443qMaJlvKl-zhTD5NR7nhDExp-PkWA__" alt="Neo CFO Logo" />
        <span>NeoCFO</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#story">Our Story</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>
      </nav>
      <a href="#schedule-demo" className="schedule-demo-btn">
        SCHEDULE A DEMO <span className="arrow">➜</span>
      </a>
    </header>
  );
}

export default Header;
