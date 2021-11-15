import React from 'react';
import PropTypes from 'prop-types'

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, onDeleteEvent }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes(),
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes(),
        )}`;

        return (
          <Event
            id={id}
            key={id}
            height={(new Date(dateTo).getTime() - new Date(dateFrom).getTime()) / (1000 * 60)}
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Hour;

Hour.propTypes = {
  dataHour: PropTypes.number,
  hourEvents: PropTypes.array.isRequired,
  onDeleteEvent: PropTypes.func
}