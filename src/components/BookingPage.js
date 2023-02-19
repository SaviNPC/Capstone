import React from "react";
import "./BookingPage.css"

function BookingPage(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button2 className="close-btn" onClick={() => props.setTrigger(false)}>Close</button2>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default BookingPage;