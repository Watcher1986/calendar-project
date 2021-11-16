import React from 'react';
import PropTypes from 'prop-types';

import Hour from '../hour/Hour';
import RedLine from '../redline/RedLine';

const Day = ({ dataDay, dayEvents, onDeleteEvent }) => {

  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {new Date().getDate() === dataDay && <RedLine />}
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
  onDeleteEvent: PropTypes.func,
};
