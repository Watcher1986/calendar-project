import React, { useState } from 'react';
import Day from '../day/Day';
import Modal from '../modal/Modal';

import './week.scss';

const Week = ({ weekDates, events, isOnCreateBtn, onCloseEvent, onCreateEvent, onDeleteEvent }) => {
  return (
    <div className="calendar__week">
      {isOnCreateBtn && <Modal onCloseEvent={onCloseEvent} onCreateEvent={onCreateEvent} />}
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        //getting all events from the day we will render
        // debugger;
        const dayEvents = events.filter(
          event => new Date(event.dateFrom) > dayStart && new Date(event.dateTo) < dayEnd,
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Week;