import React from 'react';
import Routes from './routesFrontEnd'
import './App.css'
import SignedStatus from './context/signedStatusContext/signedStatusContext';

function App() {
  return (
    <SignedStatus>
        <Routes />
    </SignedStatus>
  );
}

export default App;
