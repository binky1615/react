import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Functie om de currentTime elke seconde bij te werken
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update elke 1000 milliseconden (1 seconde)

    // Cleanup-functie om het interval te stoppen bij het unmounten van de component
    return () => clearInterval(intervalId);
  }, []); // Lege array als tweede argument zorgt ervoor dat useEffect alleen bij de mount en unmount wordt uitgevoerd

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
