import React from 'react';
import ReactDom from 'react-dom/client';
import './App.css';
import { Link, BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import Main from './Main';
import Footer from './Footer';
import Reservations from './components/Reservations';
import Outro from './mainComponents/Outro';
import Specials from './mainComponents/Specials';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Intro from './mainComponents/Intro'

function Nav(){

    function goToAbout(){
        const about = document.getElementById("outro");
        about.scrollIntoView( { behavior: 'smooth' } )
    }

    function goToMenu(){
        const specials = document.getElementById("specials");
        specials.scrollIntoView( { behavior: 'smooth' } )
    }

    function goToHome(){
        const intro = document.getElementById("intro");
        intro.scrollIntoView( { behavior: 'smooth' } )
    }

    return (
        <nav>
            <BrowserRouter className="navBar">
                <ul className="navMenu">
                    <li><Link to='/'><img className="navImg" src={require('./Logo.png')} alt="logo"/></Link></li>
                    <li><button onClick={goToHome}>Home</button></li>
                    <li><button onClick={goToMenu}>Menu</button></li>
                    <li><button onClick={goToAbout}>About</button></li>
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li><Link to='/order'>Order Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </BrowserRouter>
        </nav>
    );
};

export default Nav;

/*
<Routes>
    <Route path='/reservations'>
        <Reservations />
    </Route>
    <Route path='/order'>
        <OrderOnline />
    </Route>
    <Route path='/login'>
        <Login />
    </Route>
    <Route path='/'>
        <Main />
    </Route>
</Routes>
*/