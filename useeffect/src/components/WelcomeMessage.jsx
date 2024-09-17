import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {

  const [message, setMessage] = useState('');

  useEffect(() => {

    const currentTime = new Date();
    const hours = currentTime.getHours();
    let newMessage = '';

    if (hours < 12) {
      newMessage = 'Goedemorgen';
    } else if (hours >= 12 && hours < 18) {
      newMessage = 'Goedemiddag';
    } else {
      newMessage = 'Goedenavond';
    }

    setMessage(newMessage);
  }, []);

  return (
    <div>
      <h1>{message}, nya!</h1>
    </div>
  );
};

export default WelcomeMessage;