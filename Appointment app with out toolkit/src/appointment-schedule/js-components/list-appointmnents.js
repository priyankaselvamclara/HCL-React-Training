import React, { useState,useEffect,useContext } from "react";
import {Link} from "react-router-dom"
import { patientDetailsContext} from '../patient-details-provider';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css-components/appointment-dashboard.css'

const areEqual = (prevProps, nextProps) => true;

export const ListAppointments= React.memo(props => {
  const appointmentList = [{
    age: "32",
    contactModeEmail: true,
    contactModePhone: false,
    email: "www@gmail.com",
    gender: "Male",
    name: "122",
    phoneNumber: "97257592"
  }]
  //const appointmentList = [{}];
  const patientDetailsContextData = useContext(patientDetailsContext);
  const [appointments, setAppointments] = useState(appointmentList);
  const [isAppointed, setisAppointed] = useState(false);
  useEffect(()=> {
    console.log('patientDetails Use effect',appointments);
    if (patientDetailsContextData) {
        setAppointments([
        ...appointments,
        patientDetailsContextData
        ]);
        setisAppointed(true);
      }
  },[]);
  
  return (

        <> { setisAppointed && 
      <div className="mt-6 appointmentList">
    {
        appointments.map(function(patient, index){
          // returns Nathan, then John, then Jane
          return <Card key={index} style={{ width: '18rem' }}>
              <Card.Body >
                <Card.Title>Appointment Details</Card.Title>
                <Card.Text>
                  Name: {patient.name}
                </Card.Text>
                <Card.Text>
                  Age: {patient.age}
                </Card.Text>
                <Card.Text>
                  gender: {patient.gender}
                </Card.Text>
                <Card.Text>
                  Email: {patient.email}
                </Card.Text>
                <Card.Text>
                  Email: {patient.phone}
                </Card.Text>
                <Button ><Link to="/rescheduleAppointment">RescheduleAppointment</Link></Button>
                <Button><Link to="/cancelAppointmnent">CancelAppointmnent</Link></Button>
              </Card.Body>
            </Card>
        })
      } 
      </div>
}
      </>
  );
}, areEqual);
