import React, { useState } from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, onDeleteEvent }) => {
  const [isOnDeleteIcon, setOnDeleteIcon] = useState(false)

  const handleClick = () => {
    setOnDeleteIcon(!isOnDeleteIcon)
  }

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div className="event-container">
      <div style={eventStyle} className="event" onClick={handleClick}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {isOnDeleteIcon && (
        <button className="delete-event-btn" onClick={() => onDeleteEvent(id)}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Event;
