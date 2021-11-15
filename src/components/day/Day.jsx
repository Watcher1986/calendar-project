import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, onDeleteEvent }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  const redLineStyle = {
    top: currentTime.getHours() * 59 + currentTime.getMinutes(),
  };

  const redLine = <div style={redLineStyle} className="red-line"></div>;

  return (
    <div className="calendar__day" data-day={dataDay}>
      {currentTime.getDate() === dataDay && redLine}
      {hours.map(hour => {
        const hourEvents = dayEvents.filter((event) => {
          return new Date(event.dateFrom).getHours() === hour; 
        });

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  onDeleteEvent: PropTypes.func
}