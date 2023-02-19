import React from 'react';
import "./Reservations.css";
import { useState } from 'react';
// Date, Time, Number of Guests, Occasion (Birthday, anniversary), Submit reservation button

function Reservations() {

    const [date, setDate] = useState("dd/mm/aaaa")
    const [time, setTime] = useState("17:00")
    const [guests, setGuests] = useState("1")
    const [occasion, setOccasion] = useState("Birthday")
    // Available times? stateful array in the component named availableTimes and use this state variable to populate the time select field options.

    return (
        <form>
            <label htmlFor={"res-date"}>Choose date</label>
            <input type="date" id="res-date" onChange={date}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={time}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input onChange={guests} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={occasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
};

export default Reservations;