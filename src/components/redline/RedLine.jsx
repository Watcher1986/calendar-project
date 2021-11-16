import React, { useEffect, useState } from 'react';

import './redline.scss'

const RedLine = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  const redLineStyle = {
    top: currentTime.getHours() * 59 + currentTime.getMinutes(),
  };

  return <div style={redLineStyle} className="red-line"></div>;
};

export default RedLine;
