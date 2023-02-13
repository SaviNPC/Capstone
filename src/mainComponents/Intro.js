import React from 'react';
import './../App.css';

function Intro(){
    return(
        <section className="intro" id="intro">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.</p>
            <button style={{borderRadius: 12}}>Reserve a Table</button>
            <img src={require("./../images/4food.jpg")} alt="Four pieces of food" style={{
                borderRadius: 10,
            }}/>
        </section>
    );
};

export default Intro;