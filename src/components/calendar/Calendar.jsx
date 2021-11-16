import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEventsList, createEvent, deleteEvent } from '../../gateway/events';

import './calendar.scss';

const Calendar = ({ weekDates, onCloseEvent, isModalActive }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList().then(eventData => {
      setEvents(eventData);
    });
  };

  const onCreateEvent = eventData => {
    createEvent(eventData).then(() => fetchEvents());
  };

  const onDeleteEvent = eventId => {
    deleteEvent(eventId).then(() => fetchEvents());
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
            isModalActive={isModalActive}
            onCreateEvent={onCreateEvent}
            onDeleteEvent={onDeleteEvent}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array,
  onCloseEvent: PropTypes.func,
  isModalActive: PropTypes.bool
}