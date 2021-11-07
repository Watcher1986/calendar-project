import React, { useState, useEffect } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEventsList, createEvent, deleteEvent } from '../../gateway/events';

import './calendar.scss';

const Calendar = ({ weekDates, onCloseEvent, isOnCreateBtn }) => {
  const [events, setEvents] = useState([]);
  const [isToggleForRender, setIsToggle] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, [isToggleForRender]);

  const fetchEvents = () => {
    fetchEventsList().then(eventData => {
      setEvents(eventData);
    });
  };

  const onCreateEvent = eventData => {
    createEvent(eventData).then(() => fetchEvents());
    setIsToggle(!isToggleForRender);
  };

  const onDeleteEvent = eventId => {
    deleteEvent(eventId).then(() => fetchEvents());
    setIsToggle(!isToggleForRender);
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            onCloseEvent={onCloseEvent}
            isOnCreateBtn={isOnCreateBtn}
            onCreateEvent={onCreateEvent}
            onDeleteEvent={onDeleteEvent}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
