import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className="navbar-container">
            <div className="logo">
                <NavLink style={{ textDecoration: "none" }} to="/">
                    <h1>AiMovies</h1>
                </NavLink>
            </div>
            <div className="profile">
                <div className="avatar">
                    <NavLink to="https://ashishingle.netlify.app/" target="_blank" >
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    </NavLink>
                </div>   
            </div>
        </div>
    );
}

export default Header;
