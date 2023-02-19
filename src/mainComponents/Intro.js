import React from 'react';
import './../App.css';
import BookingPage from '../components/BookingPage';
import { useState } from 'react';
import Reservations from '../components/Reservations';

function Intro(){

    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <section className="intro" id="intro">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.</p>
            <button style={{borderRadius: 12}} onClick={() => setButtonPopup(true)}>Reserve a Table</button>
            <BookingPage trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Reservations />
            </BookingPage>
            <img src={require("./../images/4food.jpg")} alt="Four pieces of food" style={{
                borderRadius: 10,
            }}/>
        </section>
    );
};

export default Intro;