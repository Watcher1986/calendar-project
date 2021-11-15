import React from 'react';

import './sidebar.scss';

const Sidebar = () => {
  const hours = Array(24)
    .fill()
    .map((val, index) => {
      if (index < 10) {
        val = `0${index}`;
      } else {
        val = index;
      }
      return val;
    });

  return (
    <div className="calendar__time-scale">
      {hours.map(hour => (
        <div className="time-slot" key={hour}>
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
