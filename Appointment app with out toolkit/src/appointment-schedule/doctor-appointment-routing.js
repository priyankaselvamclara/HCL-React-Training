import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppointmentDashboard from './appointment-dashboard';
import { NewPatient } from './js-components/new-patient';
import { ExistingPatient } from './js-components/existing-patient';
import { CancelAppointmnent } from './js-components/cancel-appointmnent';
import { RescheduleAppointment } from './js-components/reschedule-appointment';
import { PatientDetails } from './js-components/patient-details';
import { ListAppointments } from './js-components/list-appointmnents';
import Appointments  from './js-components/appointmnents';
import { PageNotFount } from './js-components/page-not-fount';
import EditAppointments from './js-components/EditAppointments';

export function DoctorAppointmentRouting(props) {

  return (
    <div className='doctorAppointmentRouting'>
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<AppointmentDashboard/>} />
                <Route path="newPatient" element={<NewPatient />} />
                <Route path="patientDetails/:id" element={<PatientDetails/>} />
                <Route path="listAppointments" element={<ListAppointments />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="editAppointments" element={<EditAppointments />} />
                <Route path="existingPatient" element={<ExistingPatient />} />
                <Route path="cancelAppointmnent" element={<CancelAppointmnent />} />
                <Route path="rescheduleAppointment" element={<RescheduleAppointment />} />
                <Route path="*" element={<PageNotFount />} />
            </Routes>
        </BrowserRouter> 
    </div>
  );
}
