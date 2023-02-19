import React from "react";
import "./BookingPage.css"
import { useState, useReducer } from "react";
import Reservations from "./Reservations";

function updateTimes(state, action) {
    // TODO: Implement logic to update available times based on selected date
    // For now, just return the same available times
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  
function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

function BookingPage(props){

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
    const [date, setDate] = useState("")

    const handleDateChange = (event) => {
        setDate(event.target.value);
      }

    const [booking, setBooking] = useState({});

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h3>Table Reservation</h3>
                <Reservations availableTimes={availableTimes} handleDateChange={handleDateChange} setBooking={setBooking}/>
                {booking.date && (
                    <p4>
                        You have a booking on {booking.date} at {booking.time} for {booking.guests} guests for the occasion of {booking.occasion}.
                    </p4>
                )}
                <button2 className="close-btn" onClick={() => props.setTrigger(false)}>Close</button2>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default BookingPage;