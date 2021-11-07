import React from 'react';

import { months } from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({
  startDate,
  weekDates,
  handlePrevWeek,
  handleNextWeek,
  handleToday,
  onCreateEvent,
}) => {
  const currentMonth = startDate.getMonth();
  const currentYear = startDate.getFullYear();

  const closestMonth = weekDates.find(dayDate => dayDate.getMonth() !== currentMonth);

  let prevMonth = null;
  let nextMonth = null;
  let month = months[currentMonth];

  if (closestMonth !== undefined && closestMonth.getMonth() < currentMonth) {
    prevMonth = closestMonth.getMonth();
    month = `${months[prevMonth]} - ${months[currentMonth]}`;
  } else if (closestMonth !== undefined && closestMonth.getMonth() > currentMonth) {
    nextMonth = closestMonth.getMonth();
    month = `${months[currentMonth]} - ${months[nextMonth]}`;
  }

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={onCreateEvent}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button onClick={handleToday} className="navigation__today-btn button">
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={handlePrevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={handleNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
        <span className="navigation__displayed-year">{currentYear}</span>
      </div>
    </header>
  );
};

export default Header;
