import React from 'react';
import "./Reservations.css";
import { useState } from 'react';
// Date, Time, Number of Guests, Occasion (Birthday, anniversary), Submit reservation button

function Reservations(props) {

    const { availableTimes, handleDateChange, setBooking } = props
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("1")
    const [occasion, setOccasion] = useState('Birthday');
    const [date, setDate] = useState("")
    

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };
    
    const handleGuestsChange = (event) => {
        setGuests(parseInt(event.target.value));
    };
    
    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const booking = { date, time, guests, occasion };
        setBooking(booking);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={"res-date"}>Choose date</label>
            <input type="date" id="res-date" />
            
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange}>
                {availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </select>
            
            <label htmlFor="guests">Number of guests</label>
            <input value={guests} onChange={handleGuestsChange} type="number" placeholder="1" min="1" max="10" id="guests" />
            
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
};

export default Reservations;