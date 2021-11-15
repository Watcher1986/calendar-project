import React from 'react';
import PropTypes from 'prop-types'

import { days } from '../../utils/dateUtils.js';

import './navigation.scss';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      <span className="gmt">GMT+03</span>
      {weekDates.map(dayDate => (
        <div className="calendar__day-label day-label" key={dayDate}>
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired
}