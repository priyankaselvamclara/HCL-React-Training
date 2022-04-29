import React from 'react'
import './App.css';
import { DoctorAppointmentRouting } from './appointment-schedule/doctor-appointment-routing';
export const patientDetailsContext = React.createContext(null);


export default function App() {
  return (
    <div className="App">
      
        <DoctorAppointmentRouting />
     
    </div>
  );
}


