import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isOnCreateBtn, setIsOnCreateBtn] = useState(false);

  const onCreateEvent = () => {
    setIsOnCreateBtn(true);
  };

  const onCloseEvent = () => {
    setIsOnCreateBtn(false);
  };


  const resetToCurrentDate = () => {
    setWeekStartDate(new Date());
  };

  const handlePrevWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
  };

  const handleNextWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        onCreateEvent={onCreateEvent}
        startDate={weekStartDate}
        weekDates={weekDates}
        handlePrevWeek={handlePrevWeek}
        handleNextWeek={handleNextWeek}
        handleToday={resetToCurrentDate}
      />

      <Calendar 
        weekDates={weekDates} 
        onCloseEvent={onCloseEvent} 
        isOnCreateBtn={isOnCreateBtn} 
      />
    </>
  );
};

export default App;
