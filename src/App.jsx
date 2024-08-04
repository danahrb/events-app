import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// src/App.jsx
import './App.css';

const App = () => {
  const attendees = [
    { name: 'Dana', confirmed: true },
    { name: 'Nour', confirmed: false },
    { name: 'Aziz', confirmed: true },
  ];

  return (
    <>
      <h1>Attendees List</h1>
      <ul>
        {attendees.map((item, index) => (
          <li key={index}>
            {item.name} {item.confirmed ? ' Confirmed' : ' not-conformed'}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;