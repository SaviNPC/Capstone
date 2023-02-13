import React from 'react';
import './App.css';

function Footer(){
    return (
    <footer>
        <a href='index.html'><img className="logo" src={require('./Logo.png')} alt="logo"/></a>
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
            <li><a href="instagram" className="ig">Instagram</a></li>
            <li><a href="facebook" className="fb">Facebook</a></li>
            <li><a href="twitter" className="tw">Twitter</a></li>
        </ul>
    </footer>
    )
};

export default Footer;
