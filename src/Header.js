import React from 'react';
import './App.css';

function Header(){
    return (
    <header>
        <a href='index.html'><img src={require('./Logo.png')}/></a>
    </header>
    );
};

export default Header;