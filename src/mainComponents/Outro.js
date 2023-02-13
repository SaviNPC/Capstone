import React from 'react';
import './../App.css';

function Outro(){
    return(
        <secion className='outro' id="outro">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            <div className="chefPic">
                <img className="top" src={require("./../images/chef.jpg")} alt="Chef chooking" style={{
                    width: 350,
                    height: 250,
                    borderRadius: 10,
                }}/>
                <img className="bot" src={require("./../images/marioAndAdrian.jpg")} alt="Mario and Adrian" style={{
                    width: 350,
                    height: 250,
                    borderRadius: 10,
                }}/>
            </div>
        </secion>
    );
};

export default Outro;