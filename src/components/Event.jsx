import React from "react";

const Event = (props) => {
    return (
        <div className="Event" style={{ backgroundColor: props.color }}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
        </div>
    )
}

export default Event;
