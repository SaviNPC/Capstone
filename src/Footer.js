import React from 'react';
import './App.css';

function Footer(){
    return (
    <footer>
        <img src={require('./Logo.png')}/>
        <ul className="Navigation"> Navigation
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="menu">Menu</a></li>
            <li><a href="reservations">Reservations</a></li>
            <li><a href="order">Order Online</a></li>
            <li><a href="login">Login</a></li>
        </ul>
        <ul className="Contact"> Contact
            <li><a href="address">Address</a></li>
            <li><a href="phone">Phone Number</a></li>
            <li><a href="email">email</a></li>
        </ul>
        <ul className="Social Media links"> Social Media
            <li><a href="instagram">Instagram</a></li>
            <li><a href="facebook">Facebook</a></li>
            <li><a href="twitter">Twitter</a></li>
        </ul>
    </footer>
    )
};

export default Footer;
