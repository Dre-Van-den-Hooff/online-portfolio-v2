import React, { useEffect, useState } from 'react';

// Rendered client-side only so the server and browser markup always match.
const LocalTime = ({ seconds = false }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: seconds ? '2-digit' : undefined,
      timeZone: 'Europe/Brussels',
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [seconds]);

  return <span suppressHydrationWarning>{time ?? (seconds ? '--:--:--' : '--:--')}</span>;
};

export default LocalTime;
