import React from "react";
import "./BookingPage.css"
import { useState, useReducer } from "react";
import Reservations from "./Reservations";

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};

function updateTimes(state, action) {
    const selectedDate = action.payload;
    const availableTimes = fetchAPI(selectedDate);
    return availableTimes;
}
  
  function initializeTimes() {
    const today = new Date();
    const availableTimes = fetchAPI(today);
    return availableTimes;
  }

function BookingPage(props){

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
    const [selectedDate, setSelectedDate] = useState(null);
    const [booking, setBooking] = useState({});

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate);
        fetchAPI(selectedDate).then(availableTimes => {
        dispatch({ availableTimes, type: 'SET_AVAILABLE_TIMES' });
        });
    }

    const handleSubmitBooking = (booking) => {
        setBooking(booking);
    }

    function submitForm(formData) {
        submitAPI(formData);
      }

    return (props.trigger) ? (
        <div className="popup">
        <div className="popup-inner">
            <h3>Table Reservation</h3>
            <Reservations
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            setBooking={handleSubmitBooking}
            submitForm={submitForm}
            />
            {booking.date && (
            <p2>
                👌 You have a successfully booked a table on {booking.date} at {booking.time} for {booking.guests} guests for the occasion of {booking.occasion}.
            </p2>
            )}
            {selectedDate && (
            <p>
                You have selected the date {selectedDate}.
            </p>
            )}
            <button2 className="close-btn" onClick={() => props.setTrigger(false)}>Close</button2>
            { props.children }
        </div>
        </div>
    ) : "";
}

export default BookingPage;