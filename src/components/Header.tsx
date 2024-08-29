import React from "react";
import '../styles/Layout.css';
import { Link } from "react-router-dom";

function Header () {
    return(
        <div className="header">
            <h2>Little Royals</h2>
            <Link to="/" className="btn">Home</Link>
            <Link to="/aboutus" className="btn">About Us</Link>
        </div>
    );
}

export default Header;