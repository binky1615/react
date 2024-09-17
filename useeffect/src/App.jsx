import React from 'react';
import Clock from './components/clock';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css'

function App() {
  return (
    <div className='time'>
    <WelcomeMessage />
    <Clock/>
    </div>
  );
}

export default App;