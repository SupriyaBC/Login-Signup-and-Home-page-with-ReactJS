// RailwayRegistrationForm.js
import React, { useState } from 'react';
import './home.css';

const RailwayRegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [seatNumber, setSeatNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration submitted:', { fullName, email, trainNumber, seatNumber });
    // You can add further logic, like sending the data to a server
  };

  return (
    <div className="registration-container">
      <h2>Railway Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Train Number:
          <input
            type="text"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Seat Number:
          <input
            type="text"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RailwayRegistrationForm;
