import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'

import './modal.scss';

const Modal = ({ onCloseEvent, onCreateEvent }) => {
  const [event, setEvent] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newEvent = {
      title: event.title,
      description: event.description,
      dateFrom: moment(new Date(`${event.date},${event.startTime}`)).format(
        'ddd MMM DD YYYY HH:mm:ss',
      ),
      dateTo: moment(new Date(`${event.date},${event.endTime}`)).format('ddd MMM DD YYYY HH:mm:ss'),
    };
    onCreateEvent(newEvent);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onCloseEvent}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={event.title}
              placeholder="Title"
              className="event-form__field"
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                value={event.date}
                className="event-form__field"
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                value={event.startTime}
                className="event-form__field"
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                value={event.endTime}
                className="event-form__field"
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              value={event.description}
              className="event-form__field"
              onChange={handleChange}
            />
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  onCreateEvent: PropTypes.func.isRequired,
  onCloseEvent: PropTypes.func.isRequired
}