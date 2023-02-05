import React from 'react';
import './App.css';

function Header(){
    return (
    <header>
        <img src={require('./Logo.png')}/>
    </header>
    );
};

export default Header;