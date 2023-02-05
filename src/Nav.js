import React from 'react';
import './App.css';


function Nav(){
    return (
        <nav>
            <div className="navBar">
                <ul className="navMenu">
                    <li><img className="navImg" src={require('./Logo.png')}/></li>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="menu">Menu</a></li>
                    <li><a href="reservations">Reservations</a></li>
                    <li><a href="order">Order Online</a></li>
                    <li><a href="login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
