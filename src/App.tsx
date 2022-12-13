import React from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Room from './components/Room/Room';
import { ReservationForm } from './components/ReservationForm/ReservationForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><MainContent /></>} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:sedeId" element={<Room />} />
        <Route path="/rooms/reservation-form" element={<ReservationForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
