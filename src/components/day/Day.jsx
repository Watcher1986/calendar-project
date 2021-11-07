import React, { useEffect, useState } from 'react';
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
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter((event, index) => {
          return new Date(event.dateFrom).getHours() === hour; // && new Date(event.dateFrom) > new Date(event[index + 1].dateFrom) && new Date(event.dateTo) > new Date(event[index + 1].dateTo)
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
