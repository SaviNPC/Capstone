import React from 'react';
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Intro from './mainComponents/Intro';
import Specials from './mainComponents/Specials';
import Testimonials from './mainComponents/Testimonials';
import Outro from './mainComponents/Outro';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Reservations from './components/Reservations';

function Main(){
    return (
    <main>
        <Intro />
        <Specials />
        <Testimonials />
        <Outro />
    </main>
    );
};

export default Main;

