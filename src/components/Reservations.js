import React, { useState, useEffect } from 'react';
import "./Reservations.css";

function Reservations(props) {

    const { availableTimes, handleDateChange, setBooking } = props;
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState('Birthday');
    const [date, setDate] = useState("");

    const [dateValid, setDateValid] = useState(false);
    const [timeValid, setTimeValid] = useState(false);
    const [occasionValid, setOccasionValid] = useState(false);

    useEffect(() => {
        const formValid = dateValid && timeValid && occasionValid;
        const submitButton = document.getElementById("submit-button");
        submitButton.disabled = !formValid;
    }, [dateValid, timeValid, occasionValid]);

    const handleTimeChange = (event) => {
        setTime(event.target.value);
        setTimeValid(event.target.value !== "");
    };

    const handleGuestsChange = (event) => {
        setGuests(parseInt(event.target.value));
    };

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
        setOccasionValid(event.target.value !== "");
    };

    const handleDateInputChange = (event) => {
        setDate(event.target.value);
        setDateValid(event.target.value !== "");
        handleDateChange(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const booking = { date, time, guests, occasion };
        setBooking(booking);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={"res-date"}>Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateInputChange} required/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange} required>
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input value={guests} onChange={handleGuestsChange} type="number" placeholder="1" min="1" max="10" id="guests" required/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" id="submit-button" disabled />
        </form>
    )
};

export default Reservations;